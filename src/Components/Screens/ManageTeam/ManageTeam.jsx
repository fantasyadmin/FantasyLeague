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
    return x ? <PlayersInLeague
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
      <Text></Text>
      <Text></Text>
      <TopProfileBar />
      
      <Text></Text>
      <Text style={styles.text}>קבוצת פנטזי</Text>
      <View style={styles.text1}>
        <Text style={styles.text}>סה"כ נקודות:    {FantasyTeamData.team_points}</Text>
        <Text style={styles.text}>תקציב:     {FantasyTeamData.team_budget}</Text>
      </View>
      <Text></Text>
      <Text></Text>
      <ScrollView>
        <View style={{ width: '95%' }}>
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
    width: "100%",
  },
})



