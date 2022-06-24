import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
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
import { AntDesign as Icon } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import UploadPic from "../FireBase/Upload";
import GetPic from "../FireBase/GetImage";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
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

  return (
    <View style={styles.root}>
      <Text style={styles.text1}>
        פרופיל שחקן {"\n"}
        {"\n"}
      </Text>
      <View style={styles.top}>
        <Image source={{ uri: userData.picture }} style={styles.pic} />
        <View>
          <Icon
            name="picture"
            style={{ fontSize: 30, color: "white" }}
            onPress={() => navigation.navigate("Upload Picture")}
          />
        </View>
      </View>

      <Text style={styles.text}>
        {"\n"}
        {userData.nickname}
      </Text>

      <Text></Text>
      <Text></Text>
      <Text style={styles.text}> שם הליגה: {leagueData.league_name}</Text>
      <Text></Text>
      <Text style={styles.text}> מספר משחקים: {userData.games_played}</Text>
      <Text></Text>
      <Text style={styles.text}>
        {" "}
        ניקוד קבוצת פנטזי: {FantasyTeamData.team_points}
      </Text>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text style={styles.text}>ביצועים אישיים</Text>
      <Text></Text>
      <Text style={styles.text}> ציון שחקן: {userData.player_score}</Text>
      <Text></Text>
      <Text style={styles.text}> נצחונות: {userData.total_wins}</Text>
      <Text></Text>
      <Text style={styles.text}> שערים: {userData.total_goals_scored}</Text>
      <Text></Text>
      <Text style={styles.text}> בישולים: {userData.total_assists}</Text>
      <Text></Text>
      <Text style={styles.text}>
        {" "}
        שערים שספג: {userData.total_goals_recieved}
      </Text>
      <Text></Text>
      <Text style={styles.text}>
        {" "}
        פנדלים שהוחמצו: {userData.total_pen_missed}
      </Text>
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
});
