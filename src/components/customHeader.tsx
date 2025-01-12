import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const router = useRouter();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const handleHomePress = () => {
    router.dismissTo("/");
  };
  return (
    <View style={styles.title}>
      <View style={styles.titleDiv}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <AntDesign name="arrowleft" size={28} color={"#FFFFFF"} />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
      </View>
      <View style={styles.homeDiv}>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <AntDesign name="home" size={32} color={"#FFFFFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  titleText: {
    color: "#FFF",
    fontWeight: 600,
    fontSize: 28,
  },
  title: {
    height: 80,
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
    marginRight: 20,
    padding: 5,
  },
  homeButton: {
    padding: 10,
    alignSelf: "center",
  },
  titleDiv: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  homeDiv: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15,
  },
});
