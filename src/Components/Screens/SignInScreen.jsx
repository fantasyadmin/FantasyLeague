import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { image } from "../../../assets/exports";
import React, { useState, useContext } from "react";
import CustomButton from "../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  LeagueTeamsInfoContext,
  MatchInfoContext
} from "../Context/UserContext";

export default function SignInScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(
    FantasyTeamInfoContext
  );
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );
  const { leagueTeamsData, setLeagueTeamsData } = useContext(
    LeagueTeamsInfoContext
  );

  const navigation = useNavigation();

  const params = JSON.stringify({
    email: username,
    password: password,
  });

  const onSignInPress = () => {
    setUserData({});
    setLeagueData({});
    setFantasyTeamData({});
    setLeaguePlayersData({});
    setLeagueTeamsData({});
    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/LogIn/5", {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
      body: params,
    })
      .then((res) => {
        //console.log('res=', res);
        return res.json();
      })
      .then(
        (result) => {
          console.log("parrrraaaaaa ", params);
          console.log(result);
          console.log("usersssssssss ===", result.usres_in_league);

          if (result.nickname != undefined) {
            setUserData({
              nickname: result.nickname,
              user_id: result.user_id,
              picture: result.picture,
              player_score: result.player_score,
              total_assists: result.total_assists,
              total_goals_recieved: result.total_goals_recieved,
              total_goals_scored: result.total_goals_scored,
              total_pen_missed: result.total_pen_missed,
              total_wins: result.total_wins,
              games_played: result.games_played,
              team_id: result.team_id,
              league_manager: result.league_manager,
            });
            setLeagueData({
              league_name: result.league_name,
              league_id: result.league_id,
              league_rules: result.league_rules,
              Invite_url: result.invite_url
            });
            setFantasyTeamData({
              team_budget: result.team_budget,
              team_id: result.team_id,
              team_points: result.team_points,
              players: result.players,
            });
            setLeaguePlayersData({
              players: result.usres_in_league,
            });
            setLeagueTeamsData({
              teams: result.listing,
            });
            // getMatchData();
          } else {
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
            navigation.navigate("Sign In");
          }
        },
        (error) => {
          console.log("err post=", error);
          navigation.navigate("Sign In");
        }
      )
      .then(navigation.navigate("Bottom"));
  };


  const onForgotPasswordPress = () => {
    navigation.navigate("Reset Password");
  };

  const onCreateNewAccountPress = () => {
    navigation.navigate("Sign Up");
  };



  return (
    <View style={styles.root}>
      <Image source={image} style={styles.pic} />
      <Text style={styles.text}>כניסת משתמש קיים</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder={"שם משתמש"}
        style={styles.container}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder={"סיסמה"}
        style={styles.container}
        secureTextEntry
      />
      <CustomButton text="כניסה" onPress={onSignInPress} />
      <CustomButton text="שכחתי סיסמה" onPress={onForgotPasswordPress} />
      <CustomButton text="צור חשבון חדש" onPress={onCreateNewAccountPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "70%",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    textAlign: "right",
    borderRadius: 20,
    borderColor: "grey",
  },
  root: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#4472c4",
  },
  pic: {
    marginTop: 40,
    width: "100%",
    height: 420,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});



