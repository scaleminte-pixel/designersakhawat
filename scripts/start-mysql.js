const { execSync, spawn } = require('child_process');
const net = require('net');

function isPortOpen(port, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.on('error', () => {
      resolve(false);
    });
    socket.connect(port, host);
  });
}

async function ensureMySQL() {
  const running = await isPortOpen(3306);
  if (running) {
    console.log('✓ MySQL is already running on port 3306');
    return;
  }

  console.log('Starting MySQL database server...');
  const mysqlProcess = spawn(
    'C:\\Program Files\\MySQL\\MySQL Server 8.4\\bin\\mysqld.exe',
    ['--defaults-file=C:\\Users\\Public\\mysql-data\\my.ini'],
    {
      detached: true,
      stdio: 'ignore',
      windowsHide: true
    }
  );
  mysqlProcess.unref();

  for (let i = 0; i < 15; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    if (await isPortOpen(3306)) {
      console.log('✓ MySQL server started successfully on port 3306');
      return;
    }
  }
  console.warn('⚠️ MySQL launch requested, still waiting for port 3306...');
}

ensureMySQL();
