import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView, } from "react-native";
import React, { useContext, useState, useEffect, Component } from "react";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  MatchInfoContext,
  LeagueTeamsInfoContext,
} from "../../Context/UserContext";
import SmartRadar from "./RadarBuildSmartCalc";
import PlayersInLeague from "../ManageTeam/createPlayersList";

const characterData = [
  {
    ["Attack"]: 1.5,
    ["Goalie"]: 2.5,
    ["Team Player"]: 12,
    ["Player Score"]: 4,
    // charisma: 50,
  },
];

export default function SmartCalc(props) {
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(
    FantasyTeamInfoContext
  );
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueTeamsData, setLeagueTeamsData } = useContext(
    LeagueTeamsInfoContext
  );
  const [playercomp, setPlayercomp] = useState(characterData)

  function SetRadarData(user_id, color) {
    const params = JSON.stringify({
      "user_id": user_id
    });
    console.log("this is params", user_id + "     " + color);

    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/PlayerDiamond', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }),
      body: params
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          if (result != undefined) {
            console.log("data received = ", result);
            console.log("==========================", color);
            if (color == 1) {
              const compare1 = {
                ["Attack"]: result.attackRate,
                ["Goalie"]: result.goalieRate,
                ["Team Player"]: result.teamPlayerRate,
                ["Player Score"]: result.player_score,
              }
              setPlayercomp(prevState => ({ ...prevState, compare1 }))
            }
            else {
              const compare2 = {
                ["Attack"]: result.attackRate,
                ["Goalie"]: result.goalieRate,
                ["Team Player"]: result.teamPlayerRate,
                ["Player Score"]: result.player_score,
              }

              setPlayercomp(prevState => ({ ...prevState, compare2 }))
              console.log("--------------------------------", playercomp);
            }
          }
          else {
            console.log(params);
            alert("משהו השתבש, אנא נסה שנית");
          }
        })
      .catch(
        (error) => {
          console.log("err post=", error);
        })
  }


  var renderTable1 = LeaguePlayersData.players.map((x, ind) => {
    return x !== null ? <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      //points={x.player_score}
      color={1}
      //icon={logos[ind]}      // work on different icons
      user_id={x.user_id}
      tellSon={markPlayerToWatch}
    /> : null
  });

  function markPlayerToWatch(nickname, user_id, color) {
    console.log("real = ", user_id);
    console.log("side = ", color);

    alert(nickname + " was chosen to watch " + color);
    SetRadarData(user_id, color);
  }


  var renderTable2 = LeaguePlayersData.players.map((x, ind) => {
    return x !== null ? <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      //points={x.player_score}
      color={2}
      //icon={logos[ind]}      // work on different icons
      user_id={x.user_id}
      tellSon={markPlayerToWatch}
    /> : null
  });

  function markPlayerToWatch(nickname, user_id, color) {
    console.log("real = ", user_id);
    console.log("side = ", color);

    alert(nickname + " was chosen to watch " + color);
    SetRadarData(user_id, color);
  }

var radarReturn = <SmartRadar data={playercomp} />;


  return (
    <View style={styles.root}>
      <Text></Text>
      <Text style={styles.text1}>השוואת שחקנים</Text>
      <View style={styles.top}>
        <View style={styles.scrollsShell}>
          <ScrollView style={styles.scrolls}>
            <Text>
              שחקן 1
            </Text>
            {renderTable1}
          </ScrollView >
          <ScrollView>
            <Text>
              שחקן 2
            </Text>
            {renderTable2}
          </ScrollView>
        </View>
      </View>
      {radarReturn}
      {/* <SmartRadar data={playercomp} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#4472c4",
    height: "100%",
    paddingTop: 50,
  },
  pic: {
    width: 100,
    borderRadius: 100,
    height: 100,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  text1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    paddingRight: "35%",
  },
  top: {
    flexDirection: "row",
    width: "100%",
  },
  scrolls: {
    //flex: 3,
    flexDirection: 'row',
    width: "100%",
  },
  scrollsShell: {
    //flex: 3,
    flexDirection: 'row',
    width: "100%",
    height: 250
  },
});
