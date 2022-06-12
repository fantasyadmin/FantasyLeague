import { StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  MatchInfoContext,
  LeagueTeamsInfoContext,
} from "../../Context/UserContext";
import CustomButton from "../../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons as Icon } from "@expo/vector-icons";


export default function ExistingMatch() {
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const navigation = useNavigation();

  useEffect(() => {
    try {
      const result = fetch(
        "https://proj.ruppin.ac.il/bgroup89/prod/api/CloseMatch/" + leagueData.league_id,
        {
          method: "GET",
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
            Accept: "application/json; charset=UTF-8",
          }),
        }
      );
      console.log("results are: ",JSON.stringify(result));
      var exMatch = JSON.stringify(result);
      setMatchData(
        {
          match_id: exMatch.match_id,
          date: exMatch.matchDateStr,
          time: exMatch.match_time,
          teamcolor1: exMatch.team_color1,
          teamcolor2: exMatch.team_color2,
          lat: exMatch.lat,
          lng: exMatch.lng,
        }
      );
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}> משחק צ'כונה</Text>
      </View>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> תאריך:</Text>
        <Text style={styles.text}>{matchData.date}</Text>
      </View>
      <Text></Text>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}> שעה: {matchData.time}</Text>
      </View>
      <View style={styles.fieldStyle}>
        <View>
          <Text style={styles.text}> מיקום: </Text>
        </View>
        <View style={styles.textBarLocation}>

          {/* <TextInput
            value={matchData.location}
            placeholder={"  מיקום"}
            style={styles.container2}
          /> */}


        </View>
      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 1: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.teamcolor1 }}
          />
        </View>
      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.teamcolor2 }}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          text="הזן תוצאות"
          onPress={() => navigation.navigate("PlaceResults")}
        />
        <Text> </Text>
        <CustomButton
          text="טיימר למשחק"
          onPress={() => navigation.navigate("StopWatch")}
        />
      </View>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#4472c4",
    direction: "rtl",
  },
  container2: {
    backgroundColor: "#fff",
    width: "60%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    marginVertical: 5,
    textAlign: "right",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    paddingRight: 5,
    marginLeft: 7,
  },
  text1: {
    marginRight: 0,
    direction: "rtl",
  },
  fieldStyle: {
    flexDirection: "row",
    marginTop: 20,
  },
  itemsLocation: {
    paddingLeft: 10,
    width: "10%",
  },
  textBarLocation: {
    paddingTop: 7,
    //paddingLeft: 40,
    width: "100%",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    margin: "5%",
  },
  buttons1: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    width: 250,
  },
});
