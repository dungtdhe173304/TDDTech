import fs from "node:fs/promises";
import path from "node:path";

const files = [
  "/ximitech-logo.webp",
  "/ximitech-logo-light.webp",
  "/zalo-icon.png",
  "/bg/office-night.webp",
  "/bg/contact-bg.webp",
  "/nguyen-van-minh.png",
  "/lab/lab-hero.webp",
  "/lab/lab2-hero.webp",
];
for (const name of files) {
  const response = await fetch(`https://ximitech.vn${name}`);
  if (
    !response.ok ||
    !response.headers.get("content-type")?.startsWith("image/")
  ) {
    console.error(`Missing original image: ${name} (${response.status})`);
    continue;
  }
  const target = path.join("public", name);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
  console.log(`Downloaded ${name}`);
}
