import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Cards from "@/src/components/cards";
import { Category } from "@/src/utils";

export default function MainScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../assets/images/logo/fena-logo.png")}
          style={styles.titleLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardContainer}>
        {Category.map((item, index) => (
          <Cards
            key={index}
            option={item}
            onPress={() =>
              router.push({
                pathname: `/category/[categoryName]`,
                params: { categoryName: item.name },
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff910068",
  },
  title: { width: "100%", backgroundColor: "#000", height: 100 },
  cardContainer: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    gap: 20,
    marginTop: 30,
  },
  titleLogo: { width: 200, height: 100, marginLeft: 20 },
});
