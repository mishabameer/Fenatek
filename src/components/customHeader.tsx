import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.title}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <AntDesign name="arrowleft" size={28} color={"#FFFFFF"} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title.toUpperCase()}</Text>
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
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  backButton: {
    marginRight: 20,
    padding: 5,
  },
});
