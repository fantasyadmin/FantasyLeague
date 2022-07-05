import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Linking,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  MatchInfoContext,
  LeagueTeamsInfoContext,
} from "../../Context/UserContext";
import CustomButton from "../../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons as Icon } from "@expo/vector-icons";
import {
  NavigationApps,
  actions,
  googleMapsTravelModes,
} from "react-native-navigation-apps";
import * as Notifications from "expo-notifications";

export default function ExistingMatch() {
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const [getData, setGetData] = useState(matchData);
  const [renderScreen, setrenderScreen] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const params = JSON.stringify({ league_id: leagueData.league_id });
    try {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/NextMatch", {
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
        .then(async (result) => {
          console.log(result);
          await Notifications.cancelAllScheduledNotificationsAsync();
          const time = result.match_time.split(":");
          const lastDatearr = result.matchDateStr.split("/");
          const newDate = `${lastDatearr[1]}/${+lastDatearr[0]}/${
            lastDatearr[2]
          } ${+time[0] - 1}:${time[1]}`;
          const trigger = new Date(newDate);
          console.log(new Date());
          console.log(trigger);
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Your Next Game",
              body: "Be ready for your next game",
              data: { data: result.matchDateStr },
            },
            trigger,
          });
          setMatchData({
            match_id: result.match_id,
            match_date: result.matchDateStr,
            match_time: result.match_time,
            team_color1: result.color1,
            team_color2: result.color2,
            match_location: {
              lat: result.lat,
              lng: result.lng,
            },
          });
          console.log("this is what i have = ", result);
          if (result.match_id != undefined) {
            console.log(
              "printing colors========================",
              result.color1
            );
            setrenderScreen(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, [gameScreen, leagueData]);

  const gameScreen = (
    <View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> תאריך:</Text>
        <Text style={styles.text}>{matchData.match_date}</Text>
      </View>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> שעה: {matchData.match_time}</Text>
      </View>
      <View style={styles.fieldStyle}></View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 1: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.team_color1 }}
          />
        </View>
      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2: </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: matchData.team_color2 }}
          />
        </View>
      </View>
      <Text>{"\n\n\n"}</Text>
      <View style={styles.fieldStyle}>
        <View style={styles.textBarLocation}>
          <CustomButton
            text="מיקום המשחק"
            onPress={() =>
              navigation.navigate("Game Location", matchData.match_location)
            }
          />
        </View>
      </View>
      <Text>{"\n\n\n"}</Text>
      <View style={styles.textBarLocation}>
        <CustomButton
          text="טיימר למשחק"
          onPress={() => navigation.navigate("StopWatch")}
        />
      </View>
      <Text>{"\n\n\n"}</Text>
      <View style={[styles.container3, styles.text3, styles.btnModal]}>
        <NavigationApps
          viewMode={"modal"}
          modalContainerStyle={styles.modalView}
          modalBtnOpenTitle={"הפעל ניווט"}
          modalBtnOpenTextStyle={[styles.textStyle]}
          modalBtnCloseTitle={"סגור"}
          modalBtnCloseTextStyle={[
            styles.button,
            styles.buttonClose,
            styles.CancelBtn,
          ]}
          iconSize={75}
          row
          address={
            matchData.match_location.lat + "," + matchData.match_location.lng
          } // address to navigate by for all apps
          waze={{
            address: "",
            lat: matchData.match_location.lat,
            lon: matchData.match_location.lng,
            action: actions.searchLocationByLatAndLon,
          }} // specific settings for waze
          googleMaps={{
            lat: matchData.match_location.lat,
            lon: matchData.match_location.lng,
            action: actions.navigateByLatAndLon,
            travelMode: googleMapsTravelModes.driving,
          }} // specific settings for google maps
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}> משחק צ'כונה</Text>
      </View>
      <View>
        {!renderScreen ? (
          <View style={styles.text}>
            <Text style={styles.text}>
              {"\n\n\n\n\n\n\n\n\n"} עדיין לא קבעתם משחק ?
            </Text>
            <Text style={styles.text}>
              {" "}
              נווטו למסך "משחק חדש" והזמינו את החבר'ה!
            </Text>
          </View>
        ) : (
          gameScreen
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#4472c4",
    direction: "rtl",
    height: "100%",
  },
  container2: {
    backgroundColor: "#fff",
    width: "60%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    marginVertical: 5,
    textAlign: "right",
    alignItems: "center",
  },
  btnModal: {
    width: 135,
    marginLeft: 140,
  },
  container3: {
    backgroundColor: "#1b91f3",
    width: "50%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text3: {
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    paddingRight: 5,
    marginLeft: 7,
  },
  text1: {
    marginRight: 0,
    direction: "rtl",
  },
  fieldStyle: {
    flexDirection: "row",
    marginTop: 20,
  },
  itemsLocation: {
    paddingLeft: 10,
    width: "10%",
  },
  textBarLocation: {
    width: "100%",
    paddingBottom: 5,
    paddingLeft: 140,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    margin: "5%",
  },
  buttons1: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    width: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  ButtonView: {
    textAlign: "center",
    flexDirection: "row",
    margin: 45,
  },
  CancelBtn: {
    backgroundColor: "red",
  },
  ApproveBtn: {
    backgroundColor: "green",
  },
});
