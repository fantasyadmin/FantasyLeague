import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import {
  MatchInfoContext,
  UserDataContext,
  LeagueInfoContext,
} from "../../../Context/UserContext";
import CustomButton from "../../../CustomComps/CustomButton";

const PlaceResults = () => {
  const { userData } = useContext(UserDataContext);
  const { matchData } = useContext(MatchInfoContext);
  const { leagueData } = useContext(LeagueInfoContext);
  const [wins, setWins] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");
  const [penMiss, setPenMiss] = useState("");
  const [goalRecieved, setGoalRecieved] = useState("");

  //user_id, match_id, league_id, pen_missed, wins, match_color, goals_scored, goals_recieved, assistss

  const submitResultsHandler = async () => {
    if (
      wins === "" ||
      goals === "" ||
      assists === "" ||
      penMiss === "" ||
      goalRecieved === ""
    ) {
      return alert("נא למלא את כל השדות");
    }
    const data = {
      user_id: userData.user_id,
      match_id: matchData.match_id,
      league_id: leagueData.league_id,
      pen_missed: +penMiss,
      wins: +wins,
      goals_scored: +goals,
      goals_recieved: +goalRecieved,
      assists: +assists,
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>הזן תוצאות</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputArea}>
          <Text style={styles.label}>נצחונות</Text>
          <TextInput
            type={"cc-number"}
            keyboardType={"numeric"}
            style={styles.input}
            value={wins}
            onChangeText={setWins}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>שערים שהבקעתי</Text>
          <TextInput
            type={"cc-number"}
            keyboardType={"numeric"}
            style={styles.input}
            value={goals}
            onChangeText={setGoals}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>בישולים שלי</Text>
          <TextInput
            type={"cc-number"}
            keyboardType={"numeric"}
            style={styles.input}
            value={assists}
            onChangeText={setAssists}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>החמצות פנדלים</Text>
          <TextInput
            type={"cc-number"}
            keyboardType={"numeric"}
            style={styles.input}
            value={penMiss}
            onChangeText={setPenMiss}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.label}>שערים שקיבלתי כשוער</Text>
          <TextInput
            type={"cc-number"}
            keyboardType={"numeric"}
            style={styles.input}
            value={goalRecieved}
            onChangeText={setGoalRecieved}
          />
        </View>
        <CustomButton
          onPress={submitResultsHandler}
          text="שליחת תוצאות"
        ></CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default PlaceResults;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#4472c4",
    direction: "rtl",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin: 20,
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
    textAlign: "right",
  },
  input: {
    backgroundColor: "#fff",
    width: "10%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    textAlign: "center",
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginVertical: 10
  }
});
