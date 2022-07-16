import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, LeaguePlayersInfoContext, FantasyTeamInfoContext } from '../../Context/UserContext';
import PlayersInLeague from './createPlayersList';
import CustomButton from '../../CustomComps/CustomButton';


export default function SellPlayers() {
  const [toSell, setToSell] = useState()
  const [info, setInfo] = useState('')
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);





  const sortplayers = [].concat(FantasyTeamData.players).sort();


  var renderTable = sortplayers.map((x, ind) => {
    //find Team Players in league data - for performance
    const sortplayers = [].concat(LeaguePlayersData.players).sort();

    var info

    sortplayers.forEach(player => {
      if (x != null && player.user_id == x.user_id) {
        info = player
      }
    });


    return x !== null ? <PlayersInLeague
      key={ind}
      nickname={x.nickname}
      points={x.player_score}
      user_id={x.user_id}
      data={info}
      picture={x.picture}
      tellSon={markPlayerToSell}
    /> : null
  });

  function markPlayerToSell(nickname, user_id) {
    setToSell(user_id);
    console.log("real = ", user_id);
    alert(" בחרת למכור את  " + nickname + " \nלהשלמת המכירה לחץ על כפתור המכירה");
  }

  function sellPlayersAPI() {
    if (FantasyTeamData.players.length !== 0) {

      const params = JSON.stringify({
        "user_id": toSell,
        "team_id": userData.team_id
      });
      console.log(params);
      //fetch - buy player
      fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/ManageFantasyTeam/5', {
        method: 'PUT',
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
            console.log({ result });
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
              alert("הפעולה אינה חוקית");
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
      <View style={styles.container}>
        <Text style={styles.text}>מכור שחקן</Text>
      </View>
      <Text></Text>
      <View style={styles.text1}>
        <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
        <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <ScrollView>
        <View style={{ width: "95%" }}>
          <Text style={styles.text}>שחקני הקבוצה</Text>
          {renderTable}
        </View>
        <Text></Text>
        <View style={styles.buttons1}>
          <Text>                                   </Text>
          <CustomButton text="מכור שחקן" onPress={sellPlayersAPI} />
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
    paddingRight: 20,
    backgroundColor: '#4472c4',
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
    marginVertical: 10

  },
  text1: {
    marginRight: 0,
    direction: 'rtl',
  },
  pic: {
    width: '70%',
    borderRadius: 300,
    height: 300,
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