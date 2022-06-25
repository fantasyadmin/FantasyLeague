import { StyleSheet, Text, Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../../../../assets/exports";
import {
  LeagueInfoContext,
  LeaguePlayersInfoContext,
} from "../../../Context/UserContext";
import { ScrollView } from "react-native-gesture-handler";
import PlayerToApprove from "../../ManageTeam/PlayerToApprove";

export default function ApproveResults() {
  const { LeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueData } = useContext(LeagueInfoContext);
  const [approvals, setApprovals] = useState([]);

  //fetch שמקבל את רשימת התוצאות שצריך לאשר
  useEffect(() => {
    const data = {
      league_id: leagueData.league_id,
    };
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
          console.log({ result: result.m1 });
          setApprovals(result.m1);
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
});
