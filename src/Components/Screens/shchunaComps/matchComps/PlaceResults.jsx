import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import {
  MatchInfoContext,
  UserDataContext,
  LeagueInfoContext,
} from "../../../Context/UserContext";
import { TempUserDataContext } from "../../../Context/TempUserContext";
import CustomButton from "../../../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function PlaceResults({ route }) {
  const { userData } = useContext(UserDataContext);
  const { matchData } = useContext(MatchInfoContext);
  const { leagueData } = useContext(LeagueInfoContext);
  const { TempMatch, setTempMatch } = useContext(TempUserDataContext);
  const [matchId, setMatchId] = useState()
  const [lastMatch, setLastMatch] = useState()
  const [wins, setWins] = useState();
  const [goals, setGoals] = useState();
  const [assists, setAssists] = useState();
  const [penMiss, setPenMiss] = useState();
  const [goalRecieved, setGoalRecieved] = useState();
  const [renderScreen, setrenderScreen] = useState(
    <View style={styles.text}>
      <Text style={styles.text}>{'\n\n\n\n\n\n\n\n\n'}                     עדיין לא התקיים משחק</Text>
      <Text style={styles.text}> הזנת תוצאות זמינה לאחר משחקי צ'כונה בלבד</Text>
    </View>)
  const navigation = useNavigation();

  //const { lastMatchDate, lastMatchId } = route.params;


  useEffect(() => {
    //console.log("ffffffffffffffffffffffffff", lastMatchDate, lastMatchId);
    const data = JSON.stringify({
      league_id: leagueData.league_id,
    });
    try {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/LastMatch", {
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
          console.log("Close Match is//////////////////////////////: ", result);
          let date = result.matchDateStr
          setLastMatch(date);
          let id = result.match_id
          setMatchId(id);
          if (result.matchDateStr) {
            return setrenderScreen(gameScreen);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);


  const submitResultsHandler = async () => {
    if (
      wins === "" || wins < 0 ||
      goals === "" || goals < 0 ||
      assists === "" || assists < 0 ||
      penMiss === "" || penMiss < 0 ||
      goalRecieved === "" || goalRecieved < 0

    ) {
      return alert("נא למלא את כל השדות");
    }
    const data = {
      user_id: userData.user_id,
      match_id: matchId,
      league_id: leagueData.league_id,
      pen_missed: penMiss,
      wins: wins,
      goals_scored: goals,
      goals_recieved: goalRecieved,
      assists: assists,
      match_color: "blue",
    };
    console.log(data);
    try {
      const result = await fetch(
        "https://proj.ruppin.ac.il/bgroup89/prod/api/MatchResults",
        {
          method: "POST",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(data),
        }
      );
      console.log(JSON.stringify(result));
    } catch (err) {
      console.log(JSON.stringify(err));
    }
    alert("התוצאות נשלחו לאישור מנהל הליגה")
    navigation.navigate("Home")
  };


  const gameScreen = <View>
    <View>
      <Text style={styles.title2}>הזנת תוצאות למשחק מ: {lastMatch} </Text>
    </View>
    <View style={styles.form}>
      <View style={styles.inputArea}>
        <Text style={styles.label}>נצחונות </Text>
        <TextInput
          type={"cc-number"}
          keyboardType={"numeric"}
          style={styles.input}
          value={wins}
          onChangeText={setWins}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.label}>שערים שהבקעתי </Text>
        <TextInput
          type={"cc-number"}
          keyboardType={"numeric"}
          style={styles.input}
          value={goals}
          onChangeText={setGoals}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.label}>בישולים שלי </Text>
        <TextInput
          type={"cc-number"}
          keyboardType={"numeric"}
          style={styles.input}
          value={assists}
          onChangeText={setAssists}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.label}>החמצות פנדלים </Text>
        <TextInput
          type={"cc-number"}
          keyboardType={"numeric"}
          style={styles.input}
          value={penMiss}
          onChangeText={setPenMiss}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.label}>שערים שקיבלתי כשוער </Text>
        <TextInput
          type={"cc-number"}
          keyboardType={"numeric"}
          style={styles.input}
          value={goalRecieved}
          onChangeText={setGoalRecieved}
        />
      </View>
      <View style={styles.button}>
        <CustomButton
          onPress={submitResultsHandler}
          text="שליחת תוצאות"
        ></CustomButton>
      </View>
    </View>


  </View>




  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>הזן תוצאות</Text>
      </View>
      {renderScreen}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#4472c4",
    direction: "rtl",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  title2: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    margin: 20,
  },
  label: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginLeft: 10,
    paddingLeft: 1,
  },
  input: {
    backgroundColor: "#fff",
    width: "10%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    alignItems: "center",
    fontSize: 20,
  },
});
