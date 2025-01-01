import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ProductCard = ({ title = "Product Card", onPress = () => {} }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={require("../../assets/images/material-handling/vacuum-lifting/glass-vacuum-lifter/1.jpg")}
        resizeMode="cover"
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
    height: "70%",
    overflow: "hidden",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
});
