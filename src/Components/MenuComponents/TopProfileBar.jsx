import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useContext } from "react";
import CustomButton from "../CustomComps/CustomButton";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  LeagueTeamsInfoContext,
} from "../Context/UserContext";
import { useNavigation } from "@react-navigation/native";
import GetPic from "../../Components/FireBase/GetImage";

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
    <View style={styles.top}>
      <TouchableHighlight onPress={onProfileClick}>
        <GetPic />
      </TouchableHighlight>

      <View style={{ paddingTop: 45, alignItems: 'center', }}>
        <Text style={styles.text1}> שחקן <Text style={styles.varStyle}>{userData.nickname}</Text></Text>
        <Text style={styles.text1}> שם הליגה <Text style={styles.varStyle}>{leagueData.league_name}</Text></Text>
        <Text style={styles.text1}> ציון שחקן <Text style={styles.varStyle}>{userData.player_score}</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    color: "#2554C7",
    fontSize: 22,
    paddingRight: 30,
  },
  top: {
    flexDirection: "row",
    width: "95%",
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: "#F5FFFA",
    alignItems: "flex-start",
    padding: 10,
    height: "25%",
    marginTop: 10,
  },
  varStyle: {
    fontSize: 18,
    color: "#2554C7",
  },
});
