import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { productThumbnails } from "../scripts/productThumbnails";

const ProductCard = ({ title = "Product Card", onPress = () => {} }) => {
  const normalizedName = title.toLowerCase().replace(/\s+/g, "-");
  const imageSource = productThumbnails[normalizedName] || null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={
          imageSource
            ? imageSource
            : require("../../assets/images/logo/fena-logo.png")
        }
        resizeMode={imageSource ? "cover" : "contain"}
        style={styles.cardImage}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: "30%",
    height: 300,
    overflow: "hidden",
    backgroundColor: "#DA6727",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardImage: {
    width: "100%",
    height: "75%",
    overflow: "hidden",
    backgroundColor: "#000000",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
  },
});
