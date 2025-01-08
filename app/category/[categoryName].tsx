import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "@/src/components/productCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getProductInCategory } from "../../src/utils";
import CustomHeader from "@/src/components/customHeader";

const CategoryPage = () => {
  const { categoryName } = useLocalSearchParams<{ categoryName: string }>();
  const categoryDetails = getProductInCategory(categoryName);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={categoryName} />
      <View style={styles.cardContainer}>
        {categoryDetails?.products?.map((product, index) => (
          <ProductCard
            key={index}
            title={product.name}
            onPress={() => {
              if (product?.subCategories?.length > 0) {
                router.push({
                  pathname: `/subCategory/[subCategoryName]`,
                  params: {
                    subCategoryName: product.name,
                    categoryName: categoryName,
                  },
                });
              } else {
                router.push({
                  pathname: `/product/[productDetails]`,
                  params: { productDetails: product.name },
                });
              }
            }}
          />
        ))}
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
