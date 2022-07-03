import { StyleSheet, Text, View, Image, ScrollView, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
  FantasyTeamInfoContext,
  LeagueInfoContext,
} from "../../Context/UserContext";
import PlayersInLeague from "../ManageTeam/createPlayersList";
import GlobalPlayersList from "../ManageTeam/GlobalPlayersList";

export default function NominateManager() {
  const [toDel, setToDel] = useState();
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);

  const logos = <AntDesign name="key" size={29} color="yellow" />;

  const sortplayers = []
    .concat(LeaguePlayersData.players)
    .sort((a, b) => b.player_score - a.player_score); //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return (
      <View style={styles.tableRow}>
        <GlobalPlayersList
          key={ind}
          nickname={x.nickname}
          points={x.player_score}
          icon={logos}
          user_id={x.user_id}
          tellSon={markPlayerToNominate}
        />
      </View>
    );
  });

  function markPlayerToNominate(nickname, user_id) {
    console.log("deletion Candidate = ", user_id);

    Alert.alert(
      "שים לב! ",
      "אתה הולך למנות את   " +
      nickname +
      "  למנהל ליגה \n\nעם כוח גדול - באה אחריות גדולה! ",
      [
        {
          text: "ביטול",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "         " },
        {
          text: "מנה למנהל",
          onPress: () => nominatePlayerAPI(user_id, leagueData.league_id),
        },
      ],
      { cancelable: false }
    );
  }

  function nominatePlayerAPI(id, league) {
    console.log({ id, league });
    const data = JSON.stringify({
      user_id: id,
    });
    if (id) {
      //fetch - delete player
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/ChangeManager", {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: JSON.stringify( data )
      })
        .then((res) => {
          console.log("res=", res);
          return res.json();
        })
        .then((result) => {
          alert("מנהל ליגה חדש מונה בהצלחה!")
        });
    } else {
      alert("משהו השתבש, נסה במועד מאוחר יותר");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}>ניהול שחקני הליגה</Text>
        </View>
        <Text>{"\n\n\n"}</Text>
        <View style={styles.text1}>
          <Text style={styles.text}>בחר שחקן למינוי לדרגת מנהל ליגה</Text>
        </View>
        <View>{renderTable}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#4472c4",
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  text1: {
    marginRight: 0,
    direction: "rtl",
  },
  pic: {
    width: "70%",
    borderRadius: 300,
    height: 300,
  },
  tableRow: {
    flex: 1,
    flexDirection: "row",
  },
});
