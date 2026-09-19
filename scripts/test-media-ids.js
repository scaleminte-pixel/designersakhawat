async function checkMedia(id) {
  const url = `https://designersakhawat.com/api/media/${id}?size=medium`;
  const r = await fetch(url);
  console.log(`id ${id}: status ${r.status}, redirected: ${r.redirected}, final URL: ${r.url}`);
}

async function run() {
  await checkMedia(22);
  await checkMedia(25);
  await checkMedia(24);
  await checkMedia(4);
}
run();
