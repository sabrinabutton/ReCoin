
import React, { Component, useState, useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Alert, Text } from "react-native";
import test_image from "./test_image.jpg";
//Importing the installed libraries
import * as FS from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

const toServer = async (mediaFile) => {
  let type = mediaFile.type;
  let schema = "http://";
  let host ="192.168.30.183";
  let route = "";
  let port = "5000";
  let url = "";
  let content_type = "";
  type === "image"
    ? ((route = "/image"), (content_type = "image/jpeg"))
    : ((route = "/video"), (content_type = "video/mp4"));
  url = schema + host + ":" + port + route;

  let response = await FS.uploadAsync(url, mediaFile.uri, {
    headers: {
      "content-type": content_type,
    },
    httpMethod: "POST",
    uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
  });

  console.log(response.headers);
  console.log(response.body);
};

export default function App() {
  const [cameraRollPer, setCPR] = useState(null);
  const [disableButton, setDB] = useState(false);

  useEffect(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setCPR(status === "granted");
    setDB(false);
  });

  
const uriToBase64 = async (uri) => {
  let base64 = await FS.readAsStringAsync(uri, {
    encoding: FS.EncodingType.Base64,
  });
  return base64;  
};

  
const pickMedia = async () => {
 
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setCPR(cameraRollPer);
    setDB(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
  });
  if (result.cancelled) {
    return;
  }
  if (result.type == "image") {
    await toServer({
      type: result.type,
      base64: result.base64,
      uri: result.uri,
    });
  } else {
    let base64 = await uriToBase64(result.uri);
    await toServer({
      type: result.type,
      base64: base64,
      uri: result.uri,
    });
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {cameraRollPer ? (
        <Button
          title="Pick From Gallery"
          disabled={disableButton}
          onPress={async () => {
            await pickMedia();
          
              setCPR(cameraRollPer);
              setDB(false);
            
          }}
        />
      ) : (
        <Text>Camera Roll Permission Required ! </Text>
      )}
      <Button
          title="Test"
          disabled={disableButton}
          onPress={async () => {
            await toServer(test_image);
          
              setCPR(cameraRollPer);
              setDB(false);
            
          }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
