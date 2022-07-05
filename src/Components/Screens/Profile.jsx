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
  const [password, setPassword] = useState("");
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
        <Text style={styles.body}>
          {"\n"}פרופיל שחקן
        </Text>
        <View style={styles.top}>
          <View>
            <GetPic />
          </View>
          <View style={{ paddingTop: 25, alignItems: 'center', }}>
            <Text style={styles.text}>שחקן  <Text style={styles.varStyle}>{userData.nickname}</Text></Text>
            <Text style={styles.text}>שם הליגה <Text style={styles.varStyle}>{leagueData.league_name}</Text></Text>
            <Text style={styles.text}>ניקוד קבוצת פנטזי <Text style={styles.varStyle}>{FantasyTeamData.team_points}</Text></Text>
          </View>
        </View>
        <Text style={styles.body}>ביצועים אישיים</Text>
        <View style={styles.top1}>
          <Text style={styles.text1}> ציון שחקן <Text style={styles.varStyle}>{userData.player_score}</Text></Text>
          <Text style={styles.text1}> נצחונות <Text style={styles.varStyle}>{userData.total_wins}</Text></Text>
          <Text style={styles.text1}> שערים <Text style={styles.varStyle}>{userData.total_goals_scored}</Text></Text>
          <Text style={styles.text1}> בישולים <Text style={styles.varStyle}>{userData.total_assists}</Text></Text>
          <Text style={styles.text1}> שערים שספג <Text style={styles.varStyle}>{userData.total_goals_recieved}</Text></Text>
          <Text style={styles.text1}> פנדלים שהוחמצו <Text style={styles.varStyle}>{userData.total_pen_missed}</Text></Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View>
            <CustomButton onPress={() => navigation.navigate("Upload Picture")} text="שנה תמונת פרופיל" />
          </View>
          <View >
            <CustomButton onPress={onChangePassPress} text="שינוי סיסמא" />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder={"סיסמה חדשה"}
              style={styles.container}
              secureTextEntry
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
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
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    paddingHorizontal: 51,
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
    borderColor: 'black',
    borderWidth: 1
  },
  text: {
    fontWeight: "bold",
    color: "#2554C7",
    fontSize: 22,
    paddingRight: 30,
  },
  text1: {
    fontWeight: "bold",
    color: "#2554C7",
    fontSize: 22,
    textAlign: 'center',
    padding: 4
  },
  top: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: "#F5FFFA",
  },
  top1: {
    //flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: "#F5FFFA",
  },
  body: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    padding: 16,
    textAlign: 'center'
  },
  varStyle: {
    fontSize: 18
  },
});
