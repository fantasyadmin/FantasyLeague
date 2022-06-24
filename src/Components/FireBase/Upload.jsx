import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebaseConfig from "./Config";
import { initializeApp } from "firebase/app"; //validate yourself
import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/storage"; //access the storage database
// import { LogBox } from "react-native";
import { profilePic } from "../../../assets/exports";
import { AntDesign as Icon } from "@expo/vector-icons";
import { UserDataContext } from "../Context/UserContext";
import { GetPic } from "./GetImage";
// LogBox.ignoreLogs(["Setting a timer"]);

initializeApp(firebaseConfig);
export default function UploadPic() {
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // if (!result.cancelled) {
    //   const storage = getStorage(); //the storage itself
    //   console.log(storage);
    //   const ref = ref(storage, "image.jpg"); //how the image will be addressed inside the storage

    //   //convert image to array of bytes
    //   const img = await fetch(result.uri);
    //   const bytes = await img.blob();

    //   await uploadBytes(ref, bytes); //upload images
    // }

    if (!result.cancelled) {
      const storage = getStorage(); //the storage itself
      // const ref_con = ref(storage, 'image.jpg'); //how the image will be addressed inside the storage
      const picName = new Date().toISOString();
      const ref_con = ref(storage, picName); //how the image will be addressed inside the storage
      //convert image to array of bytes
      const img = await fetch(result.uri);
      // console.log("=#=#=#=#", );
      const bytes = await img.blob();
      await uploadBytes(ref_con, bytes); //upload images
      //לשלוח את result.uri לשרת שלנו
      const data = JSON.stringify({
        user_id: userData.user_id,
        picture: picName,
      });
      try {
        fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/EditPlayer", {
          method: "POST",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
          body: data,
        })
          .then((res) => {
            console.log("res=", res);
            return res.json();
          })
          .then((result) => {
            console.log("picture update:", result);
            setUserData((prevState) => ({
              ...prevState,
              picture: result.picture,
            }));
            console.log("change user data to======", userData.picture);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <View style={styles.top}>
        {GetPic}
        {/* <Image source={profilePic} style={styles.pic} /> */}
      </View>

      <TouchableHighlight onPress={pickImage}>
        <Text style={{ color: "white" }}>שנה תמונת פרופיל</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#4472c4",
    height: "100%",
    paddingTop: 50,
  },
  pic: {
    width: "70%",
    borderRadius: 100,
    height: "70%",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  text1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    paddingRight: "35%",
  },
  top: {
    flexDirection: "row",
    width: "100%",
    height: "60%",
    // alignItems: "center",
    justifyContent: "center",
  },
});
