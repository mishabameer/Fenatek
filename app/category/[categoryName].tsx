import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "@/src/components/productCard";
import { useLocalSearchParams } from "expo-router";
import { getProductInCategory } from "../../src/utils";

const CategoryPage = () => {
  const { categoryName } = useLocalSearchParams();
  const categoryDetails = getProductInCategory(categoryName);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        {categoryDetails?.products?.map((val) => {
          return <ProductCard title={val.name} />;
        })}
      </View>
    </ScrollView>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff910068",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 20,
    padding: 20,
    alignContent: "center",
  },
});
