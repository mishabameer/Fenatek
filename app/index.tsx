import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Cards from "@/src/components/cards";

export default function MainScreen() {
  const router = useRouter();

  const category = [
    { id: 1, name: "Material Handling" },
    { id: 2, name: "Steel Machineries" },
    { id: 3, name: "Construction" },
    { id: 4, name: "Industrial Solutions" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require("../assets/images/logo/fena-logo.png")}
          style={styles.titleLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.cardContainer}>
        {category.map((item, index) => (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff910068",
  },
  title: { width: "100%", backgroundColor: "#000", height: 100 },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    gap: 20,
  },
  titleLogo: { width: 200, height: 100, marginLeft: 20 },
});
