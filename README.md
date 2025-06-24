## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## To add new product

## Try to name the folder as per how we need to show in the app

1. Add images to product page with name all small and seperated with '-'
2. Add thumbnails to thumbnail folder with similar naming
3. Add the product name in the utils file according to the category and name should be similar to product image folder name with space instead of '-'
4. Run script 'fetchProductImages' to build productData JSON file
5. Run script 'createProductData' to build prodcut data maping file
6. Run script 'createGetThumbnails' to build thumbnail data maping file
7. Re-build the apk - "eas build -p android --profile preview"

## run ./webpToJpg.sh in script folder to convert images
