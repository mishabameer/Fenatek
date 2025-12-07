import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoSection = ({ videoData }) => {
  const extractYouTubeId = (url) => {
    const reg =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_\-]{11})/;
    const match = url.match(reg);
    return match ? match[1] : null;
  };
  const renderItem = ({ item }) => {
    const videoId = extractYouTubeId(item.uri);
    return (
      <View style={styles.videoContainer}>
        {videoId ? (
          <YoutubePlayer
            videoId={videoId}
            height={250}
            mute={true}
            initialPlayerParams={{
              controls: true,
              modestbranding: true,
              rel: false,
              showinfo: false,
              loop: false,
              preventFullScreen: false,
              cc_lang_pref: "en",
            }}
          />
        ) : (
          <WebView
            source={{ uri: item.uri }}
            style={styles.webView}
            javaScriptEnabled
            allowsFullscreenVideo
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Videos</Text>
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
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
