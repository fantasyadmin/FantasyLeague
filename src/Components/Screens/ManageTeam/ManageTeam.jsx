import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, FantasyTeamInfoContext, LeaguePlayersInfoContext } from '../../Context/UserContext';
import PlayersInLeague from './createPlayersList';
import CustomButton from '../../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';


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


export default function ManageTeam() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const [player, setPlayer] = useState('0');

  const navigation = useNavigation();

  const sortplayers = [].concat(FantasyTeamData.players).sort();

  console.log({ players: FantasyTeamData.players })


  var renderTable = sortplayers.map((x, ind) => {
    return x !== null ? <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      points={x.player_score}
      icon={logos[ind]}      // work on different icons
      user_id={x.user_id}
      tellSon={markPlayerToWatch}
    /> : null
  });


  function markPlayerToWatch(nickname, user_id) {
    //plyerProfile(user_id);
  }

  const plyerProfile = (user_id) => {
    const params = JSON.stringify({
      "user_id": user_id
    });
    console.log(params);

    //fetch - get user data from DB
    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/EditPlayer/5', {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }),
      params
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log(result)
          if (result.nickname != undefined) {
            setTempUserData({
              nickname: result.nickname,
              picture: result.picture,
              user_id: result.user_id,
              games_played: result.games_played,
              player_score: result.player_score,
              total_assists: result.total_assists,
              total_goals_recieved: result.total_goals_recieved,
              total_goals_scored: result.total_goals_scored,
              total_pen_missed: result.total_pen_missed,
              total_wins: result.total_wins,
            })
            console.log("data received = ", result);
            console.log("==========================");
            console.log("user id = ", result.user_id);
            navigation.navigate('Player Profile');
          }
          else {
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
          }
        },
        (error) => {
          console.log("err post=", error);
        })
  }


  function TeamPlace() {
    const sortTeams = []
      .concat(LeaguePlayersData.players)
      .sort((a, b) => b.player_score - a.player_score);

    for (let index = 1; index < sortTeams.length; index++) {
      if (condition) {
        return index
      }
    }
  }


  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
        <Text style={styles.text}>קבוצת פנטזי</Text>
      </View>

      <Text></Text>
      <View style={styles.text1}>
        <Text style={styles.text}>דירוג קבוצה בליגה:      {FantasyTeamData.team_points}</Text>
        <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
        <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <ScrollView>
        <View style={{width: '95%'}}>
          <Text style={styles.text}>שחקני הקבוצה</Text>
          {renderTable}
        </View>
        <View style={styles.buttons}>
          <CustomButton text="קנה שחקן" onPress={() => navigation.navigate('Buy Players')} />
          <Text>                </Text>
          <CustomButton text="מכור שחקן" onPress={() => navigation.navigate('Sell Players')} />
        </View>
        <Text></Text>
        <View style={styles.buttons1}>
          <Text>                                   </Text>
          <CustomButton text="השוואת שחקנים" onPress={() => navigation.navigate('SmartCalc')} />
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



