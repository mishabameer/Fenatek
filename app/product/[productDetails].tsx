import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoSection from "../../src/components/videoSection";
import { PRIMARY_THEME } from "../../src/constants";
import GetProductData from "../../src/GetProductData";

interface ImageData {
  id: number;
  path: string;
}
interface VideoData {
  id: number;
  uri: string;
}

const ProductDetails: React.FC = () => {
  const { productDetails } = useLocalSearchParams<{ productDetails: string }>();
  const productData = GetProductData(productDetails);
  const videoData: VideoData[] = [
    {
      id: 1,
      uri: "https://www.youtube.com/embed/0mdAV0fk1r8?si=1--oU4nH5ioJUo_1",
    },
    {
      id: 2,
      uri: "https://youtu.be/kN3vhw0Hvc8?si=2DryDdeGMqIklrLv",
    },
    {
      id: 3,
      uri: "https://www.youtube.com/embed/0mdAV0fk1r8?si=1--oU4nH5ioJUo_1",
    },
    {
      id: 4,
      uri: "https://www.youtube.com/embed/0mdAV0fk1r8?si=1--oU4nH5ioJUo_1",
    },
  ];
  const numColumns = 3;
  const itemWidth = Dimensions.get("window").width / numColumns - 40;

  const renderItem = ({ item }: { item: ImageData }) => {
    return (
      <View style={styles.card}>
        <Image
          source={item.path}
          style={[styles.image, { width: itemWidth, height: itemWidth }]}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{productDetails}</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={productData?.images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          scrollEnabled={false}
        />
      </View>
      {productData?.videos?.length > 0 && (
        <View>
          <VideoSection videoData={productData?.videos} />
        </View>
      )}
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_THEME,
  },
  body: {
    padding: 20,
    alignItems: "center",
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
  image: {
    borderRadius: 10,
  },
  card: {
    margin: 10,
    alignItems: "center",
  },
  titleText: {
    color: "#FFF",
    fontWeight: 600,
    fontSize: 32,
  },
  video: {
    width: "100%",
    height: 300, // Adjust height based on requirements
  },
});
