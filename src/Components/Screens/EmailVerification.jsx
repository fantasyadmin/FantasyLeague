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
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  LeagueTeamsInfoContext,
} from "../Context/UserContext";

export default function EmailVerification({ route }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [league_id, setleagueId] = useState(0);
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(
    FantasyTeamInfoContext
  );
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );
  const { leagueTeamsData, setLeagueTeamsData } = useContext(
    LeagueTeamsInfoContext
  );
  const { registerUser } = route.params;
  const navigation = useNavigation();

  const params = JSON.stringify({
    email: username,
    password: password, // verify field//////////////////////////////////////
  });

  //user registration
  const onSignUpPress = () => {
    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/Register", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
      body: params,
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          /// if result is ok - navigate to sign in else try again or resend verification
          console.log("gotit", JSON.parse(registerUser).nickname);
          () => VerifiedMail
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };


  const VerifiedMail = () => {
    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/Register", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
      body: JSON.parse(registerUser),
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
  };

  const onClickTermsOfUse = () => {
    //תנאי שימוש
    console.warn("Terms of use redirect");
  };


  const ResendVerification = () => {
    console.warn("Resend Verification");
    //fill resend verification to mail
  };



  return (
    <View style={styles.root}>
      <Image source={image} style={styles.pic} />
      <Text style={styles.text}>אימות כתובת מייל</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={"כתובת מייל"}
        style={styles.container}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={"קוד אימות"}
        style={styles.container}
        secureTextEntry
      />
      <CustomButton text="כניסה" onPress={onSignUpPress} />
      <CustomButton text="שלח קוד אימות בשנית" onPress={ResendVerification} />
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
    height: "100%",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#4472c4",
  },
  pic: {
    marginTop: 40,
    width: "100%",
    height: 420,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
