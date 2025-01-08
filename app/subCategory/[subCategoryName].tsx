import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ProductCard from "@/src/components/productCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getProductInCategory } from "../../src/utils";
import CustomHeader from "@/src/components/customHeader";

const SubCategoryPage = () => {
  const { subCategoryName, categoryName } = useLocalSearchParams<{
    subCategoryName: string;
    categoryName: string;
  }>();
  const categoryDetails = getProductInCategory(categoryName)?.products.find(
    (product) => product.name === subCategoryName
  );
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={subCategoryName} />
      <View style={styles.cardContainer}>
        {categoryDetails?.subCategories?.map((sub, index) => (
          <ProductCard
            key={index}
            title={sub.name}
            onPress={() =>
              router.push({
                pathname: `/product/[productDetails]`,
                params: { productDetails: sub.name },
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default SubCategoryPage;

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
