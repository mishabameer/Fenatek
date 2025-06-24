for dir in ../../assets/images/product ../../assets/images/productThumbnails; do
  find "$dir" -type f -name "*.webp" | while read file; do
    jpg_file="${file%.webp}.jpg"
    sips -s format jpeg "$file" --out "$jpg_file" && rm "$file"
  done
done
