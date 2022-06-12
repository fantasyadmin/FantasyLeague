import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, LeaguePlayersInfoContext, FantasyTeamInfoContext } from '../../Context/UserContext';
import PlayersInLeague from './createPlayersList';
import CustomButton from '../../CustomComps/CustomButton';


const logos = [
  <FontAwesome5 name="crown" size={23} color="#993" />,
  <MaterialCommunityIcons name="weight-lifter" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
  <Icon name="rocket" size={29} color="#900" />,
]


export default function BuyPlayers() {
  const [toBuy, setToBuy] = useState()
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);

  const sortplayers = [].concat(LeaguePlayersData.players).sort();   //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      points={x.player_score}
      icon={logos[ind]}
      user_id={x.user_id}
      tellSon={markPlayerToBuy}
    />
  });

  function markPlayerToBuy(nickname, user_id) {
    setToBuy(user_id);
    //console.log(toBuy);
    // console.log("real = ", user_id);
    alert(nickname + " was chosen to buy");
  }

  function buyPlayersAPI() {
    if (FantasyTeamData.players.length <= 4) {

      const params = JSON.stringify({
        "user_id": toBuy,
        "team_id": userData.team_id
      });
      // console.log(params);
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
              setFantasyTeamData(prevState => ({...prevState, players, team_budget: result.team_budget, team_points: result.team_points}))
            // console.log("data received = ", result);
            // console.log("==========================");
            // console.log("user data3 = ", result.player1);

          }
          else {
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
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
      <Text style={styles.text}>קנה שחקן</Text>
    </View>
    <Text></Text>
    <View style={styles.text1}>
      <Text style={styles.text}>דירוג קבוצה בליגה:</Text>
      <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
      <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
    </View>
    <Text></Text>
    <Text></Text>
    <ScrollView>
      <View>
        <Text style={styles.text}>שחקני הליגה</Text>
        {renderTable}
      </View>
      <Text></Text>
      <View style={styles.buttons1}>
        <Text>                                   </Text>
        <CustomButton text="קנה שחקן" onPress={buyPlayersAPI} />
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