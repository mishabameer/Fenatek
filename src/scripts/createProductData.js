const fs = require("fs");

const productData = require("./productData.json");

function generateProductData(data) {
  let functionBody = `const ProductData = (name) => {\n  const normalizedName = name.toLowerCase().replace(/\\s+/g, "-");\n  switch (normalizedName) {\n`;

  for (const product in data) {
    const images = data[product].images.map(
      (img) => `          { id: ${img.id}, path: require("${img.path}") }`
    );
    const videos = data[product].videos.map(
      (vid, index) => `          { id: ${index + 1}, uri: "${vid.uri}" }`
    );

    functionBody += `    case "${product}":\n      return {\n        images: [\n${images.join(
      ",\n"
    )}\n        ],\n        videos: [\n${videos.join(
      ",\n"
    )}\n        ]\n      };\n\n`;
  }

  functionBody += `    default:\n      return { images: [], videos: [] };\n  }\n};\n\nexport default ProductData;`;

  return functionBody;
}

const result = generateProductData(productData);

// Write the result to a file
fs.writeFileSync("../ProductData.js", result);

console.log("ProductData.js generated successfully!");
