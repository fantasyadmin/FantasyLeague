import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../assets/exports';
import { UserDataContext, LeaguePlayersInfoContext, FantasyTeamInfoContext } from '../../Context/UserContext';
import PlayersInLeague from './createPlayersList';
import CustomButton from '../../CustomComps/CustomButton';


export default function BuyPlayers() {
  const [toBuy, setToBuy] = useState()
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);

  const sortplayers = [].concat(LeaguePlayersData.players).sort();   //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return <PlayersInLeague
      key={ind}
      nickname={x.nickname}
      points={x.player_score}
      user_id={x.user_id}
      data={x}
      picture={x.picture}
      tellSon={markPlayerToBuy}
    />
  });

  function markPlayerToBuy(nickname, user_id) {
    setToBuy(user_id);
    //console.log(toBuy);
    console.log("real = ", user_id);
    alert(" בחרת לקנות את  " + nickname + " \nלהשלמת הרכישה לחץ על כפתור הקניה");
  }

  function buyPlayersAPI() {
    if (FantasyTeamData.players.length <= 4) {

      const params = JSON.stringify({
        "user_id": toBuy,
        "team_id": userData.team_id
      });
      console.log(params);
      //fetch - buy player
      fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/AddPlayer', {
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
            if (result.team_id != undefined) {
              const players = [
                result.player1,
                result.player2,
                result.player3,
                result.player4,
              ]
              setFantasyTeamData(prevState => ({ ...prevState, players, team_budget: result.team_budget, team_points: result.team_points }))
              console.log("data received = ", result);
              console.log("==========================");
              console.log("user data3 = ", result.player1);
            }
            else {
              alert("  הפעולה אינה חוקית, בדוק אם השחקן נמצא כבר בקבוצת הפנטזי שלך או שהתקציב שלך מאפשר קניה");
            }
          },
          (error) => {
            console.log("err post=", error);
          })
    }
    else {
      alert("כבר יש לך קבוצת פנטזי מלאה, מכור שחקן ונסה שנית")
    }
  }


  return (
    <SafeAreaView style={styles.container1}>
      <Text style={styles.text1}>קניית שחקן לקבוצת הפנטזי</Text>
      <Image source={image} style={styles.pic} />
      <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
      <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
      <CustomButton text="קנה שחקן" onPress={buyPlayersAPI} />
      <Text></Text>
      <ScrollView>
        <View style={{ width: "95%", justifyContent: "center" }}>
          {renderTable}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#4472c4',
    justifyContent: 'center'
  },
  container1: {
    flex: 1,
    paddingRight: 20,
    backgroundColor: '#4472c4',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginVertical: 10,
    paddingTop: 20,
  },
  pic: {
    width: "10%",
    borderRadius: 300,
    height: 200,
    paddingHorizontal: 150,
    paddingVertical: 130
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    marginHorizontal: "12%"
  },
  buttons1: {
    flexDirection: 'row',

    flex: 1,
    alignContent: 'center',
    width: 250,
  },
})