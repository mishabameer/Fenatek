const fs = require("fs");
const path = require("path");

const baseDir = "../../assets/images/productThumbnails";

function generateProductThumbnailMap(baseDir) {
  const files = fs.readdirSync(baseDir);
  const productThumbnails = {};

  files.forEach((file) => {
    if (file.match(/\.(png|jpg|jpeg|webp)$/i)) {
      const productName = path.parse(file).name.toLowerCase();
      productThumbnails[productName] = `require("${path
        .join(baseDir, file)
        .replace(/\\/g, "/")}")`;
    }
  });

  return productThumbnails;
}

const productThumbnails = generateProductThumbnailMap(baseDir);
const outputFilePath = path.join(__dirname, "productThumbnails.ts");

let fileContent = `type ProductThumbnails = {
  [key: string]: any,
};
export const productThumbnails: ProductThumbnails = {\n`;

Object.keys(productThumbnails).forEach((key) => {
  fileContent += `  "${key}": ${productThumbnails[key]},\n`;
});

fileContent += `};\n`;

fs.writeFileSync(outputFilePath, fileContent);

console.log("productThumbnails.ts generated successfully!");
