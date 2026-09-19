const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function exportSql() {
  const conn = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'SakhawatDev2024!',
    database: 'portfolio_db'
  });

  // Order tables by dependency so parent tables are created before foreign keys
  const orderedTables = [
    'media',
    'admin_users',
    'activity_log',
    'settings',
    'industries',
    'services',
    'service_packages',
    'projects',
    'project_media',
    'client_logos',
    'testimonials',
    'inquiries'
  ];

  const [tables] = await conn.execute('SHOW TABLES');
  const existingTables = tables.map(t => Object.values(t)[0]);
  const tableNames = orderedTables.filter(t => existingTables.includes(t));

  let sql = '-- Hostinger Portfolio Database Dump\n';
  sql += 'SET NAMES utf8mb4;\n';
  sql += 'SET FOREIGN_KEY_CHECKS = 0;\n\n';

  for (const table of tableNames) {
    const [createRows] = await conn.execute(`SHOW CREATE TABLE \`${table}\``);
    sql += `-- Table structure for ${table}\n`;
    sql += `DROP TABLE IF EXISTS \`${table}\`;\n`;
    sql += createRows[0]['Create Table'] + ';\n\n';

    const [rows] = await conn.execute(`SELECT * FROM \`${table}\``);
    if (rows.length > 0) {
      const keys = Object.keys(rows[0]).map(k => `\`${k}\``).join(', ');
      sql += `-- Data for ${table}\n`;
      sql += `INSERT INTO \`${table}\` (${keys}) VALUES\n`;
      
      const rowStrings = rows.map(r => {
        const vals = Object.values(r).map(v => {
          if (v === null || v === undefined) return 'NULL';
          if (typeof v === 'number') return v;
          if (v instanceof Date) return `'${v.toISOString().slice(0, 19).replace('T', ' ')}'`;
          if (typeof v === 'object') return `'${JSON.stringify(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
          return `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r')}'`;
        });
        return `  (${vals.join(', ')})`;
      });

      sql += rowStrings.join(',\n') + ';\n\n';
    }
  }

  sql += 'SET FOREIGN_KEY_CHECKS = 1;\n';
  const outPath = path.join(__dirname, '..', 'hostinger_import.sql');
  fs.writeFileSync(outPath, sql, 'utf8');
  console.log('Successfully generated hostinger_import.sql, size:', (sql.length / 1024).toFixed(2), 'KB');
  await conn.end();
}

exportSql().catch(console.error);
