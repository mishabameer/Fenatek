const fs = require("fs");

const productData = require("./productData.json");

function generateGetProductData(data) {
  let functionBody = `const GetProductData = (name) => {\n  const normalizedName = name.toLowerCase().replace(/\\s+/g, "-");\n  switch (normalizedName) {\n`;

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

  functionBody += `    default:\n      return { images: [], videos: [] };\n  }\n};\n\nexport default GetProductData;`;

  return functionBody;
}

const result = generateGetProductData(productData);

// Write the result to a file
fs.writeFileSync("../GetProductData.js", result);

console.log("GetProductData.js generated successfully!");
