import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { image } from "../../../assets/exports";
import React, { useState, useContext } from "react";
import CustomButton from "../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { UserDataContext } from "../Context/UserContext";

export default function SignUpScreen() {
  const { userData, setUserData } = useContext(UserDataContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setverifyPassword] = useState("");
  const [league_id, setleagueId] = useState(0);
  const [picture, seTpicture] = useState(
    "https://i.pinimg.com/564x/7d/d0/17/7dd017ed88fae531247a869fabda52e8.jpg"
  );

  const navigation = useNavigation();

  const registerUser = JSON.stringify({
    nickname: username,
    email: email,
    password: password,
    league_id: league_id,
    picture: picture,
  });

  //user registration
  const onSignUpPress = () => {
    if (password == verifypassword) {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/Register", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: registerUser,
      })
        .then((res) => {
          return res.json();
        })
        .then(
          (result) => {
            setUserData({
              league_id: result.league_id,
            });
          },
          (error) => {
            console.log("err post=", error);
          }
        );
      if (!league_id) {
        setleagueId(userData.league_id);
        navigation.navigate("Create League");
      } else {
        navigation.navigate("Sign In");
      }
    } else {
      alert("הסיסמאות שהזנת אינן תואמות, נסה שנית");
    }
  };

  const onClickContinue = () => {
    if (password == verifypassword) {
      navigation.navigate("Email Verification", { registerUser: registerUser });
    }
    else {
      alert("אימות הסיסמא אינו זהה לסיסמא שנבחרה, אנא נסה שנית")

    }
  };



  const onClickTermsOfUse = () => {
    //תנאי שימוש
    console.warn("Terms of use redirect");
  };

  const onExistingAcount = () => {
    navigation.navigate("Sign In");
  };

  return (
    <View style={styles.cover}>
      <ScrollView>
        <Image source={image} style={styles.pic} />
        <View style={styles.root}>
          <Text style={styles.text}>רישום משתמש חדש</Text>
          <TextInput
            value={league_id}
            onChangeText={setleagueId}
            placeholder={"מצטרף לליגה קיימת? הזן מספר ליגה"}
            style={styles.container}
          />
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder={"שם משתמש"}
            style={styles.container}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={'דוא"ל'}
            style={styles.container}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"סיסמה"}
            style={styles.container}
            secureTextEntry
          />
          <TextInput
            value={verifypassword}
            onChangeText={setverifyPassword}
            placeholder={"אמת"}
            style={styles.container}
            secureTextEntry
          />
          <CustomButton text="אשר כתובת מייל והיכנס" onPress={onClickContinue} />
          <Text>
            אני מאשר כי קראתי והסכמתי
            <Text style={styles.link} onPress={onClickTermsOfUse}>
              {" "}
              לתנאי השימוש ומדיניות הפרטיות{" "}
            </Text>
            באפליקציית Fantasy League צ'כונה
          </Text>
          <Text onPress={onExistingAcount}>כבר יש לי חשבון</Text>
          <Text></Text>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "70%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    textAlign: "right",
  },
  root: {
    width: "100%",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#4472c4",
  },
  pic: {
    width: "100%",
    height: 410,
    marginTop: 40
  },
  link: {
    color: "#fdb075",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  cover: {
    backgroundColor: "#4472c4",
    height: "100%"
  }
});
