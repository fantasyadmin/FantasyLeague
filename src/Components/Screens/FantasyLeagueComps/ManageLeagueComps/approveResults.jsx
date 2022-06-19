import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import TeamInTable from "../TableComps/TeamInTable";
import PlayersInLeague from "../../ManageTeam/createPlayersList";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../../../../assets/exports";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  UserDataContext,
  LeagueInfoContext,
  LeaguePlayersInfoContext,
} from "../../../Context/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import PlayerToApprove from "../../ManageTeam/PlayerToApprove";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TempUserDataContext } from "../../../Context/TempUserContext";

export default function ApproveResults() {
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const approvals = [];
  const { TempUserData, setTempUserData } = useContext(TempUserDataContext);

  function CalcRes(result) {
    
    for (let index = 0; index < LeaguePlayersData.length; index++) {
      result.forEach(x => {
        if (x.user_id == LeaguePlayersData[index].user_id) {
          approvals[index] = ({
            nickname: x.m1.nickname,
            total_goals_scored: x.m1.total_goals_scored,
            total_assists: x.m1.total_assists,
            total_goals_recieved: x.m1.total_goals_recieved,
            total_pen_missed: x.m1.total_pen_missed,
            total_wins: x.m1.total_wins,
          })
        }
        console.log("8888888888888888888888888888888888888", approvals[index]);
      });
    }
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
          console.log("reeeeeeeessss", res);
          return res.json();
        })
        .then((result) => {
          CalcRes(result.m1)

          console.log("333333", result);

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
      <ScrollView>
        {LeaguePlayersData.players.map((player, ind) => (
          <Pressable>
            <PlayerToApprove key={ind} player={player} data={approvals} />
          </Pressable>
        ))}
      </ScrollView>
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
});
