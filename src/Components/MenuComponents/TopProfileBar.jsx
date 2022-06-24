import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useContext } from "react";
import { profilePic, image } from "../../../assets/exports";
import CustomButton from "../CustomComps/CustomButton";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  LeagueTeamsInfoContext,
} from "../Context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { GetPic } from "../../Components/FireBase/GetImage";

export default function TopProfileBar(props) {
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
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

  const onProfileClick = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.root}>
      <TouchableHighlight onPress={onProfileClick}>
        <Image source={{ uri: GetPic }} style={styles.pic} />
      </TouchableHighlight>

      <View>
        <Text style={styles.text}> {userData.nickname}</Text>
        <Text></Text>
        <Text style={styles.text}> שם הליגה: {leagueData.league_name}</Text>
        <Text style={styles.text}> מספר משחקים: {userData.games_played}</Text>
        <Text style={styles.text}> ציון שחקן: {userData.player_score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
    backgroundColor: "#4472c4",
    height: "25%",
    marginTop: 10,
    borderRadius: 100,
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
});
