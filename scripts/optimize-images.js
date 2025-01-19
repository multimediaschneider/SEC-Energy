const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageDir = path.join(process.cwd(), "public");

async function optimizeImages() {
  const images = fs
    .readdirSync(imageDir)
    .filter((file) => file.match(/\.(jpg|jpeg|png)$/i));

  for (const image of images) {
    const imagePath = path.join(imageDir, image);
    const outputName = path.parse(image).name;

    console.log(`Processing ${image}...`);

    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(path.join(imageDir, `${outputName}.webp`));
  }

  console.log("Done optimizing images!");
}

optimizeImages().catch(console.error);
