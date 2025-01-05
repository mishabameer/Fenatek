const fs = require("fs");
const path = require("path");

// Base directory (adjust this to your actual path)
const baseDir = path.join(__dirname, "../../assets/images/product"); // Use __dirname for correct relative paths

// Function to generate the product data object
function generateProductData(baseDir) {
  const productData = {};

  // Read all product directories
  const products = fs.readdirSync(baseDir);

  products.forEach((product) => {
    const productPath = path.join(baseDir, product);

    if (fs.lstatSync(productPath).isDirectory()) {
      // Collect images
      const images = fs
        .readdirSync(productPath)
        .filter((file) => file.match(/\.(png|jpg|jpeg|webp)$/i)) // Only image files
        .map((file, id) => ({
          id: id + 1,
          path: path.join("assets/images/product", product, file), // Save path as a string
        }));

      // Collect videos from videos.json if present
      let videos = [];
      const videosJsonPath = path.join(productPath, "videos.json");
      if (fs.existsSync(videosJsonPath)) {
        const videoData = JSON.parse(fs.readFileSync(videosJsonPath, "utf8"));
        videos = videoData.videos.map((uri, id) => ({ id: id + 1, uri }));
      }

      // Add product data to the object
      productData[product] = { images, videos };
    }
  });

  return productData;
}

// Generate product data
const data = generateProductData(baseDir);

// Output the result to a file
fs.writeFileSync(
  path.join(__dirname, "productData.json"),
  JSON.stringify(data, null, 4)
);

console.log("productData.json generated successfully!");
