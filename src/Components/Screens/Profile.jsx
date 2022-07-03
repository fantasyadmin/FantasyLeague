import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import React, { useContext, useState } from "react";
import CustomButton from "../CustomComps/CustomButton";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  LeagueTeamsInfoContext,
} from "../Context/UserContext";
import { AntDesign as Icon } from "@expo/vector-icons";
import GetPic from "../FireBase/GetImage";
import { useNavigation } from "@react-navigation/native";
import PassMeter from "react-native-passmeter";
import { ScrollView } from "react-native-gesture-handler";


export default function Profile() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueTeamsData, setLeagueTeamsData } = useContext(LeagueTeamsInfoContext);
  const [password, setPassword] = useState("");
  const [verifypassword, setverifyPassword] = useState("");
  const MAX_LEN = 15,
    MIN_LEN = 7,
    PASS_LABELS = ["לא מספיק תווים", "חלש", "בינוני", "חזק", "מאובטח"];


  const navigation = useNavigation();

  const onChangePassPress = () => {


    const data = JSON.stringify({
      password: password,
      user_id: userData.user_id,
    });



    console.log("change password = ", data);
    if (password.length > 6) {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/ChangePassword", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(data)
      }).then((res) => {
        console.log("gotit", res);
        const statusCode = res.status
        const data = res.json();
        return Promise.all([statusCode, data]);
      })
        .then(([res, data]) => {
          if (res = 200) {
            alert("הסיסמה החדשה נשמרה בהצלחה")
            setPassword("")
          }
          else {
            alert(data)
          }
        },
          (error) => {
            console.log("err post=", error);
          }
        );
    } else {
      if (password.length <= 6) {
        alert("הסיסמא חייבת להיות מורכבת 7 תווים לפחות");
      }
    }
  };


  return (

    <View style={styles.root}>
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.text1}>
          פרופיל שחקן {"\n"}
          {"\n"}
        </Text>
        <View style={styles.top}>
          <View>
            <GetPic />
          </View>
          <Text style={styles.text}> {userData.nickname}           </Text>
        </View>
        <View style={{ alignItems: 'flex-start' }}>
          <Icon
            name="picture"
            style={{ fontSize: 30, color: "white" }}
            onPress={() => navigation.navigate("Upload Picture")}
          />
        </View>

        <Text></Text>
        <Text style={styles.text}> שם הליגה: {leagueData.league_name}</Text>
        <Text></Text>
        <Text style={styles.text}> מספר משחקים: {userData.games_played}</Text>
        <Text></Text>
        <Text style={styles.text}>
          {" "}
          ניקוד קבוצת פנטזי: {FantasyTeamData.team_points}
        </Text>
        <Text></Text>
        <Text style={styles.text}>ביצועים אישיים</Text>
        <Text></Text>
        <Text style={styles.text}> ציון שחקן: {userData.player_score}</Text>
        <Text></Text>
        <Text style={styles.text}> נצחונות: {userData.total_wins}</Text>
        <Text></Text>
        <Text style={styles.text}> שערים: {userData.total_goals_scored}</Text>
        <Text></Text>
        <Text style={styles.text}> בישולים: {userData.total_assists}</Text>
        <Text></Text>
        <Text style={styles.text}>
          {" "}
          שערים שספג: {userData.total_goals_recieved}
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          {" "}
          פנדלים שהוחמצו: {userData.total_pen_missed}
        </Text>
        <View style={{ marginLeft: 10, marginRight: 60 }}>
          <Text>{"\n\n"}</Text>
          <CustomButton onPress={onChangePassPress} text="שינוי סיסמא" />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={"סיסמה חדשה"}
            style={styles.container}
            secureTextEntry
          />
        </View>
        <View style={{ width: "80%" }}>
          <PassMeter
            showLabels
            password={password}
            maxLength={MAX_LEN}
            minLength={MIN_LEN}
            labels={PASS_LABELS}
          />
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
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#4472c4",
    paddingTop: 50,
    height: "100%"
  },
  pic: {
    width: 100,
    borderRadius: 100,
    height: 100,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
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
    marginBottom: 10
  },
});
