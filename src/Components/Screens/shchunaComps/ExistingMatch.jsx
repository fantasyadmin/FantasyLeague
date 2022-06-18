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
import GameMapComp from "./matchComps/GoogleMapsAPI/GameLocMap";


export default function ExistingMatch() {
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);

  const navigation = useNavigation();

  useEffect(() => {
    const params = JSON.stringify({ 'league_id': leagueData.league_id })
    try {
      fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/CloseMatch', {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: params
      })
        .then(res => {
          console.log('res=', res);
          return res.json()
        })
        .then(
          (result) => {
            console.log("results are: ", result);
            setMatchData(
              {
                match_id: result.match_id,
                match_date: result.matchDateStr,
                match_time: result.match_time,
                team_color1: result.team_color1,
                team_color2: result.team_color2,
                match_location: {
                  lat: result.lat, lng: result.lng,
                }
              }
            );
            console.log("this is what i have = ", matchData);
          })
    }
    catch (err) {
      console.log(err);
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
        <Text style={styles.text}>{matchData.match_date}</Text>
      </View>
      <Text></Text>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}> שעה: {matchData.match_time}</Text>
      </View>
      <View style={styles.fieldStyle}>
      </View>


      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 1: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.team_color1 }}
          />
        </View>
      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.team_color2 }}
          />
        </View>
      </View>
      <Text></Text>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> מיקום המשחק:          </Text>
        <View style={styles.textBarLocation}>
          <CustomButton
            text="הצג מיקום על המפה"
            onPress={() => navigation.navigate("Game Location", matchData.match_location)} />
        </View>
      </View>
      <View style={styles.buttons}>
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
    width: "100%",
    paddingBottom: 5
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
