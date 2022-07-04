import { StyleSheet, Text, View, Image, Linking } from "react-native";
import CustomButton from "../CustomComps/CustomButton";
import TopProfileBar from "../MenuComponents/TopProfileBar";
import { useNavigation } from "@react-navigation/native";
import { LeagueInfoContext, UserDataContext, MatchInfoContext } from "../Context/UserContext";
import React, { useState, useContext, useEffect } from "react";
import GetPic from "../FireBase/GetImage";
import PushPage from "../PushNotifications/PushNotifications";

const Home = () => {
  const { userData } = useContext(UserDataContext);
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const [lastMatch, setLastMatch] = useState();
  const [matchId, setmatchId] = useState();
  const navigation = useNavigation();


  const onPressChat = () => {
    try {
      Linking.openURL(leagueData.Invite_url);
    } catch (error) {
      alert("לא קיימת קבוצה");
    }
  };


  return (
    <View style={styles.container}>
      <TopProfileBar />
      <CustomButton
        text="משחק הצ'כונה הבא"
        onPress={() => navigation.navigate("Existing Match")}
      />
      <CustomButton text="צ'אט הליגה" onPress={onPressChat} />
      <CustomButton
        text="הזן תוצאות משחק"
        onPress={() => navigation.navigate("Place Results")}
      />

      <Text></Text>
      <Text></Text>

      <Text style={styles.text}>ניהול ליגה</Text>
      <CustomButton
        text="הזמן שחקן חדש"
        onPress={() => navigation.navigate("Contacts List")}
      />
      {userData.league_manager && (
        <>
          <CustomButton
            text="אשר תוצאות משחקים"
            onPress={() => navigation.navigate("Approve Results")}
          />
          <CustomButton
            text="הגדרות הליגה"
            onPress={() => navigation.navigate("Edit League")}
          />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "#4472c4",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
