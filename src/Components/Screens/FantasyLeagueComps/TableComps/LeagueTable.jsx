import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import TeamInTable from "./TeamInTable";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../../../../assets/exports";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
    .sort((a, b) => b.player_score - a.player_score);

  console.log({ sortTeams });

  var renderTable = sortTeams.map((x, ind) => {
    return (<View>
      <TeamInTable
        key={ind}
        nickname={x.nickname}
        place={ind + 1}
        user_id={x.user_id}
        points={x.player_score}
      />
    </View>

    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>טבלת הליגה</Text>
      <Image source={image} style={styles.pic} />
      <Text> </Text>
      <Text style={styles.text}>טבלת הקבוצות</Text>
      <ScrollView>{renderTable}</ScrollView>
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
