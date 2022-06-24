import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import firebaseConfig from "./Config";
import { initializeApp } from "firebase/app"; //validate yourself
import { getStorage, ref, getDownloadURL } from "firebase/storage"; //access the storage database
import { UserDataContext } from "../Context/UserContext";

initializeApp(firebaseConfig);

export default function GetPic() {
  const [url, setUrl] = useState(
    "https://i.pinimg.com/564x/7d/d0/17/7dd017ed88fae531247a869fabda52e8.jpg"
  );
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, userData.picture);
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      });
      console.log("asdasdasdasdasdasdas", reference);
    };

    if (url == undefined) {
      func();
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#123456",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={{ width: "100%", height: "100%" }} source={{ uri: url }} />
    </View>
  );
}
