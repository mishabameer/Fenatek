import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import { WebView } from "react-native-webview";

const VideoSection = ({videoData}) => {
  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <WebView
        source={{ uri: item.uri }}
        style={styles.webView}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}

      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two columns for side-by-side videos
        contentContainerStyle={styles.list}        
      />
    </View>
  );
};

export default VideoSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  list: {
    justifyContent: "center",
  },
  videoContainer: {
    flex: 1,
    margin: 10,
    height: Dimensions.get("window").width / 3, // Set height proportional to screen width
  },
  webView: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
});
