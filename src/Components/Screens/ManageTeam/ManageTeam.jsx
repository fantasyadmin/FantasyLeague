import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, FantasyTeamInfoContext, LeaguePlayersInfoContext } from '../../Context/UserContext';
import PlayersInLeague from './createPlayersList';
import CustomButton from '../../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
import TopProfileBar from '../../MenuComponents/TopProfileBar';




export default function ManageTeam() {
  const { userData, setUserData } = useContext(UserDataContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const [player, setPlayer] = useState('0');

  const navigation = useNavigation();

  const sortplayers = [].concat(FantasyTeamData.players).sort();

  console.log({ players: FantasyTeamData.players })


  var renderTable = sortplayers.map((x, ind) => {

    //find Team Players in league data - for performance
    const sortplayers = [].concat(LeaguePlayersData.players).sort();

    var info

    sortplayers.forEach(player => {
      if (player.user_id == x.user_id) {
        info = player
      }
    });

    return x ? <PlayersInLeague
      key={ind}
      nickname={x.nickname}
      points={x.player_score}
      user_id={x.user_id}
      picture={x.picture}
      data={info}
      tellSon={markPlayerToWatch}
    /> : null
  });


  function markPlayerToWatch(nickname, user_id) {
    //plyerProfile(user_id);
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
      <TopProfileBar />
      <Text style={styles.text}>קבוצת פנטזי</Text>
      <View style={styles.text1}>
        <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
        <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
      </View>
      <ScrollView>
        <View style={{ width: '95%' }}>
          <Text style={styles.text}>שחקני הקבוצה</Text>
          {renderTable}
        </View>
        <View style={styles.buttons}>
          <CustomButton text="קנה שחקן" onPress={() => navigation.navigate('Buy Players')} color={"green"} txt={"white"} />
          <Text>         </Text>
          <CustomButton text="מכור שחקן" onPress={() => navigation.navigate('Sell Players')} color={"#990000"} txt={"white"} />
        </View>
        <View style={styles.buttons1}>
          <Text>                            </Text>
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
    //paddingTop: 40,
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
    marginVertical: 5
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
    justifyContent: 'center',
    marginRight: 19
  },
  buttons1: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    width: "77%",
    justifyContent: 'center'
  },
})



