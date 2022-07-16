import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../../../../assets/exports";
import {
  UserDataContext,
  LeagueInfoContext,
  LeaguePlayersInfoContext,
  InviteContactsContext
} from "../../../Context/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import PlayerToApprove from "../../ManageTeam/PlayerToApprove";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ApproveResults() {
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { TempUserData, setTempUserData } = useContext(InviteContactsContext);
  const [approvals, setApprovals] = useState([])
  const [rendering, setRendering] = useState([])


  function CalcRes(result) {
    setApprovals(result)
  }

  //fetch שמקבל את רשימת התוצאות שצריך לאשר
  useEffect(() => {
    const data = {
      league_id: leagueData.league_id,
    };
    console.log(data);
    try {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/MatchActiveInLeague", {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log("reeeeeees===============================================", result);
          CalcRes(result.m1)
          console.log("check state for approval ", approvals);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>תוצאות ממתינות לאישור</Text>
      <Image source={image} style={styles.pic} />
      <Text> </Text>
      <Text style={styles.text}>בחר שחקן לצפיה בתוצאות</Text>
      {approvals.length > 0 && (
        <ScrollView>
          {LeaguePlayersData.players.map((player, ind) => (
            <PlayerToApprove key={ind} player={player} approvals={approvals} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#4472c4",
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
  noResults: {
    backgroundColor: "red",
    borderRadius: 180,
    color: "white",
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
