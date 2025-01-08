import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import VideoSection from "../../src/components/videoSection";
import { PRIMARY_THEME } from "../../src/constants";
import GetProductData from "../../src/GetProductData";
import CustomHeader from "@/src/components/customHeader";
import { ImageSourcePropType } from "react-native";
import { Modal } from "react-native";

interface ImageData {
  id: number;
  path: ImageSourcePropType;
}
const { width: screenWidth } = Dimensions.get("window");

const ProductDetails: React.FC = () => {
  const { productDetails } = useLocalSearchParams<{ productDetails: string }>();
  const productData = GetProductData(productDetails);
  const numColumns = 3;
  const itemWidth = Dimensions.get("window").width / numColumns - 40;
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setSelectedIndex(index);
    setIsPreviewVisible(true);
  };

  const renderItem = ({ item, index }: { item: ImageData; index: number }) => (
    <TouchableOpacity onPress={() => handleImagePress(index)}>
      <View style={styles.card}>
        <Image
          source={item.path}
          style={[styles.image, { width: itemWidth, height: itemWidth }]}
        />
      </View>
    </TouchableOpacity>
  );
  const renderPreviewItem = ({ item }: { item: ImageData }) => (
    <View style={styles.fullscreenImageContainer}>
      <Image
        source={item.path}
        style={styles.fullscreenImage}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <CustomHeader title={productDetails} />
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
      <Modal
        visible={isPreviewVisible}
        transparent={true}
        onRequestClose={() => setIsPreviewVisible(false)}
      >
        <FlatList
          data={productData?.images}
          renderItem={renderPreviewItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          initialScrollIndex={selectedIndex}
          getItemLayout={(data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / screenWidth
            );
            setSelectedIndex(index);
          }}
        />
      </Modal>
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
  image: {
    borderRadius: 10,
  },
  card: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  video: {
    width: "100%",
    height: 300,
  },
  fullscreenImageContainer: {
    width: screenWidth,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
  },
});
