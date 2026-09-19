async function run() {
  const r = await fetch('https://designersakhawat.com/services');
  const html = await r.text();
  const regex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/g;
  let m;
  console.log("Found images in /services:");
  while ((m = regex.exec(html)) !== null) {
    console.log(m[2], "==>", m[1]);
  }
}
run();
