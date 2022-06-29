import { StyleSheet, Text, View, Image, Linking } from "react-native";
import CustomButton from "../../../CustomComps/CustomButton";
import TopProfileBar from "../../../MenuComponents/TopProfileBar";
import { useNavigation } from "@react-navigation/native";
import { LeagueInfoContext, UserDataContext, MatchInfoContext } from "../../../Context/UserContext";
import React, { useState, useContext, useEffect } from "react";
import GetPic from "../../../FireBase/GetImage";
import { image } from "../../../../../assets/exports";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const EditLeague = () => {
  const { userData } = useContext(UserDataContext);
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const [lastMatch, setLastMatch] = useState();
  const [matchId, setmatchId] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>הגדרות ליגה</Text>
      <Image source={image} style={styles.pic} />

      <CustomButton
        text="הוסף / שנה כתובת צ'אט"
        onPress={() => navigation.navigate("League Table")}
      />
      <CustomButton
        text="הסרת שחקן מהליגה"
        onPress={() => navigation.navigate("Existing Match")}
      />
      <CustomButton
        text="הסבר על ניהול ליגה"
        onPress={() => navigation.navigate("Place Results")}
      />
      <Pressable onPress={() => navigation.navigate("Contacts List")} style={styles.container2}>
        <Text style={styles.text2}>איפוס תוצאות הליגה</Text>
      </Pressable>
    </View>
  );
};

export default EditLeague;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "#4472c4",
  },
  container2: {
    backgroundColor: 'red',
    width: '50%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
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
  text2: {
    fontWeight: 'bold',
    color: 'white',
},
});
