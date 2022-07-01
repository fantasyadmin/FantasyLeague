import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { app } from "./firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; //access the storage database
import { UserDataContext } from "../Context/UserContext";

export default function GetPic() {
  const [url, setUrl] = useState(
    "https://i.pinimg.com/564x/7d/d0/17/7dd017ed88fae531247a869fabda52e8.jpg"
  );
  const { userData } = useContext(UserDataContext);

  useEffect(async () => {
    if(userData.picture === null) return;
      const storage = getStorage(app);
      const reference = ref(storage, userData.picture);
      const picUrl = await getDownloadURL(reference);
      setUrl(picUrl);
  }, [userData.picture]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: 120, height: 120, borderRadius: 180}}
        source={{
          uri: url,
        }}
      />
    </View>
  );
}
