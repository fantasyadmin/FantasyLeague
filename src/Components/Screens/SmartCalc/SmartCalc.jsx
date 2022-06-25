import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
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

export default function SmartCalc(props) {
  const { LeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const [playercomp, setPlayercomp] = useState([
    // {
    //   ["Attack"]: 1,
    //   ["Goalie"]: 250,
    //   ["Team Player"]: 1,
    //   ["Player Score"]: 40,
    //   // charisma: 50,
    // },
    // {
    //   ["Attack"]: 2,
    //   ["Goalie"]: 300,
    //   ["Team Player"]: 4,
    //   ["Player Score"]: 20,
    // },
  ]);

  function SetRadarData(user_id, color, nickname) {
    const params = JSON.stringify({
      user_id: user_id,
    });
    console.log("this is params", user_id + "     " + color);

    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/PlayerDiamond", {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
      body: params,
    })
      .then((res) => {
        console.log("res=", res);
        return res.json();
      })
      .then((result) => {
        if (result != undefined) {
          console.log("data received = ", result);
          console.log("==========================", color);
          console.log({ compareData: result });
          if (color == 1) {
            const compare1 = {};
            if (result.attackRate > 0) {
              compare1["Attack"] = result.attackRate;
            }
            if (result.goalieRate > 0) {
              compare1["Goalie"] = result.goalieRate;
            }
            if (result.teamPlayerRate > 0) {
              compare1["Team Player"] = result.teamPlayerRate;
            }
            if (result.player_score > 0) {
              compare1["Player Scrore"] = result.player_score;
            }
            if (Object.keys(compare1).length === 0)
              return alert("user don't have data");
            alert(nickname + " was chosen to watch " + color);
            setPlayercomp((prevState) => {
              if (prevState.length == 2) return [compare1];
              return [...prevState, compare1];
            });
          } else {
            const compare2 = {};
            if (result.attackRate > 0) {
              compare2["Attack"] = result.attackRate;
            }
            if (result.goalieRate > 0) {
              compare2["Goalie"] = result.goalieRate;
            }
            if (result.teamPlayerRate > 0) {
              compare2["Team Player"] = result.teamPlayerRate;
            }
            if (result.player_score > 0) {
              compare2["Player Scrore"] = result.player_score;
            }
            if (Object.keys(compare2).length === 0)
              return alert("user don't have data");

            alert(nickname + " was chosen to watch " + color);
            setPlayercomp((prevState) => {
              if (prevState.length == 2) return [compare2];
              return [...prevState, compare2];
            });
          }
        } else {
          console.log(params);
          alert("משהו השתבש, אנא נסה שנית");
        }
      })
      .catch((error) => {
        console.log("err post=", error);
      });
  }

  function getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  function processData(data) {
    const maxByGroup = getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  var renderTable1 = LeaguePlayersData.players.map((x, ind) => {
    return x !== null ? (
      <PlayersInLeague
        key={x.user_id}
        nickname={x.nickname}
        //points={x.player_score}
        color={'כתום'}
        //icon={logos[ind]}      // work on different icons
        user_id={x.user_id}
        tellSon={markPlayerToWatch}
      />
    ) : null;
  });

  function markPlayerToWatch(x) {
    console.log("real = ", x.nickname);
    console.log("side = ", x.color);
    console.log("name = ", x.nickname);
    SetRadarData(x);
  }

  var renderTable2 = LeaguePlayersData.players.map((x, ind) => {
    console.log("222222222222222222222222222", x);
    return x !== null ? (
      <PlayersInLeague
        key={x.user_id}
        nickname={x.nickname}
        //points={x.player_score}
        color={'אדום'}
        //icon={logos[ind]}      // work on different icons
        user_id={x.user_id}
        tellSon={markPlayerToWatch}
      />
    ) : null;
  });

  let maxima = null;
  let raderData = null;
  if (playercomp.length == 2) {
    console.log({ playercomp });
    maxima = getMaxima(playercomp);
    raderData = processData(playercomp);
  }

  function markPlayerToWatch(nickname, user_id, color) {
    console.log("real = ", user_id);
    console.log("side = ", color);
    SetRadarData(user_id, color, nickname);
  }

  return (
    <View style={styles.root}>
      <Text></Text>
      <Text style={styles.text1}>השוואת שחקנים</Text>
      <View style={styles.top}>
        <View style={styles.scrollsShell}>
          <ScrollView style={styles.scrolls}>
            <Text>שחקן 1</Text>
            {renderTable1}
          </ScrollView>
          <ScrollView>
            <Text>שחקן 2</Text>
            {renderTable2}
          </ScrollView>
        </View>
      </View>
      {maxima && raderData ? (
        <SmartRadar maxima={maxima} data={raderData} />
      ) : <Text>לא נבחרו שחקנים להשוואה</Text>}
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
    flexDirection: "row",
    width: "100%",
  },
  scrollsShell: {
    //flex: 3,
    flexDirection: "row",
    width: "100%",
    height: 250,
  },
});
