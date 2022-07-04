import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import TeamInTable from "./TeamInTable";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../../../../assets/exports";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
} from "../../../Context/UserContext";
import { ScrollView } from "react-native-gesture-handler";


export default function LeagueTable(props) {
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );

  //sort teams by score
  const sortTeams = []
    .concat(LeaguePlayersData.players)
    .sort((a, b) => b.team_points - a.team_points);

  console.log({ sortTeams });

  var renderTable = sortTeams.map((x, ind) => {
    console.log("i prinfffff", x);
    return (<View>
      <TeamInTable
        key={ind}
        nickname={x.nickname}
        place={ind + 1}
        user_id={x.user_id}
        points={x.team_points}
        picture={x.picture}
      />
    </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>טבלת הליגה</Text>
      <Image source={image} style={styles.pic} />
      <Text style={styles.text1}> נבחרת            ניקוד                בעלים             מקום</Text>
      <ScrollView>
        {renderTable}
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
    fontSize: 30,
  },
  pic: {
    width: "50%",
    borderRadius: 300,
    height: 200,
  },
  text1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textDecorationLine: 'underline'
  },
});
