import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "@/src/components/productCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getProductInCategory } from "../../src/utils";

const CategoryPage = () => {
  const { categoryName } = useLocalSearchParams();
  const categoryDetails = getProductInCategory(categoryName);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{categoryName}</Text>
      </View>
      <View style={styles.cardContainer}>
        {categoryDetails?.products?.map((val, index) => {
          return (
            <ProductCard
              key={index}
              title={val.name}
              onPress={() =>
                router.push({
                  pathname: `/product/[productDetails]`,
                  params: { productDetails: val.name },
                })
              }
            />
          );
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
  title: {
    width: "100%",
    backgroundColor: "#000",
    height: 100,
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleText: {
    color: "#FFF",
    fontWeight: 600,
    fontSize: 32,
  },
});
