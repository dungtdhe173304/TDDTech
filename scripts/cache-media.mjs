import fs from "node:fs/promises";
import path from "node:path";

const original =
  "https://pub-0a31f9a8b1e7482c97358b9371b0c390.r2.dev/uploads/ximitech";
const main = await fs.readFile(
  "../ximitech.vn/assets/index-DAfw2Y79.js",
  "utf8",
);
const jobs = new Map();
const add = (url, filename) => jobs.set(url, filename);
for (const match of main.matchAll(/slug:\s*"([a-z0-9-]+)"/g)) {
  for (const width of [640, 1280, 1920, 2880]) {
    const file = `projects/v2/${match[1]}-${width}.webp`;
    add(`${original}/${file}`, `media/ximitech/${file}`);
  }
}
for (let n = 1; n <= 20; n++) {
  add(
    `${original}/kho-giao-dien/v1/${n}.webp`,
    `media/ximitech/kho-giao-dien/v1/${n}.webp`,
  );
}
for (const match of main.matchAll(
  /\$\{ae\}(\/[a-zA-Z0-9/.-]+\.(?:jpg|webm|mp4))/g,
)) {
  add(`${original}/video/v1${match[1]}`, `media/ximitech/video/v1${match[1]}`);
}
for (const file of await fs.readdir("src/original")) {
  const source = await fs.readFile(`../ximitech.vn/assets/${file}`, "utf8");
  for (const match of source.matchAll(
    /https:\/\/[^\s"'`\\<>]+\.(?:webp|png|jpe?g)/g,
  )) {
    const url = new URL(match[0]);
    if (match[0].startsWith(original))
      add(
        match[0],
        `media/ximitech${url.pathname.slice("/uploads/ximitech".length)}`,
      );
    else add(match[0], `media/external/${url.hostname}${url.pathname}`);
  }
}
// Self-host the exact font families/weights and unicode subsets from the reference.
const fontUrl =
  "https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500;1,600;1,700&display=swap";
const fontResponse = await fetch(fontUrl, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
  },
});
if (!fontResponse.ok)
  throw new Error(`Font stylesheet: ${fontResponse.status}`);
let fontCss = await fontResponse.text();
for (const match of fontCss.matchAll(/https:\/\/fonts.gstatic.com\/[^)\s]+/g)) {
  const filename = `fonts/${new URL(match[0]).pathname.slice(1)}`;
  add(match[0], filename);
  fontCss = fontCss.replaceAll(match[0], `/${filename}`);
}

const results = [];
const queue = [...jobs.entries()];
async function worker() {
  while (queue.length) {
    const [url, filename] = queue.shift();
    const target = path.join("public", filename);
    try {
      try {
        if ((await fs.stat(target)).size > 0) {
          results.push({ url, filename, cached: true });
          continue;
        }
      } catch {}
      const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (
        !response.ok ||
        response.headers.get("content-type")?.includes("text/html")
      )
        throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, buffer);
      results.push({ url, filename, bytes: buffer.length });
    } catch (error) {
      results.push({ url, filename, error: error.message });
    }
    if (results.length % 25 === 0)
      console.log(`Cached ${results.length}/${jobs.size} assets`);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
await fs.mkdir("verification", { recursive: true });
await fs.writeFile(
  "verification/media-report.json",
  JSON.stringify(results, null, 2),
);
const failed = results.filter((result) => result.error);
console.log(JSON.stringify({ total: results.length, failed }, null, 2));
// Only rewrite paths whose files were actually downloaded.
const remoteImages = results.filter(
  (result) =>
    !result.error &&
    result.url.includes("/media/") === false &&
    !result.url.startsWith(original) &&
    !result.url.includes("fonts.gstatic.com"),
);
for (const file of await fs.readdir("src/original")) {
  const filename = `src/original/${file}`;
  let source = await fs.readFile(filename, "utf8");
  source = source.replaceAll(original, "/media/ximitech");
  for (const item of remoteImages)
    source = source.replaceAll(item.url, `/${item.filename}`);
  await fs.writeFile(filename, source);
}
await fs.writeFile("src/app/fonts.css", fontCss);
