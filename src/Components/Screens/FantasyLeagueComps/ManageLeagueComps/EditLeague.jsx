import { StyleSheet, Text, View, Image, Linking, Alert } from "react-native";
import CustomButton from "../../../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { LeagueInfoContext, UserDataContext, MatchInfoContext } from "../../../Context/UserContext";
import React, { useState, useContext, useEffect } from "react";
import { image } from "../../../../../assets/exports";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import RulesModal from "./RulesModal";

const EditLeague = () => {
  const { userData } = useContext(UserDataContext);
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const [lastMatch, setLastMatch] = useState();
  const [matchId, setmatchId] = useState();

  const navigation = useNavigation();

  function DelAllData() {
    Alert.alert(
      "שים לב! ",
      "האם אתה בטוח שברצונך לאפס את נתוני הליגה?\n" +
      "לחיצה על כפתור האישור תמחק את הנתונים הבאים:\n" +
      "כל המשחקים שהתקיימו, ציוני כל השחקנים, ואת כל קבוצות הפנטזי.",
      [
        {
          text: "ביטול",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "         " },
        {
          text: "איפוס נתוני ליגה",
          onPress: () => ResetLeagueInformation(leagueData.league_id),
        },
      ],
      { cancelable: false }
    );
  }

  function ResetLeagueInformation(league) {
    const data = JSON.stringify({
      league_id: league,
    });
    //fetch - delete player
    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/ResetLeague", {
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
        console.log(result);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>הגדרות ליגה</Text>
      <Image source={image} style={styles.pic} />

      <CustomButton
        text="הוסף / שנה כתובת צ'אט"
        onPress={() => navigation.navigate("Edit League Details")}
      />
      <CustomButton
        text="הסרת שחקן מהליגה"
        onPress={() => navigation.navigate("Manage Players")}
      />
      <RulesModal />
      <Pressable onPress={() => DelAllData()} style={styles.container2}>
        <Text style={styles.text2}>איפוס תוצאות הליגה</Text>
      </Pressable>
    </View>
  );
};

export default EditLeague;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "#4472c4",
  },
  container2: {
    backgroundColor: 'red',
    width: '50%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  pic: {
    width: "70%",
    borderRadius: 300,
    height: 300,
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
  },
});
