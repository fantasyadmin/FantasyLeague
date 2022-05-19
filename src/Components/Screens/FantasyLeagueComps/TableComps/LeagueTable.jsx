import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import TeamInTable from './TeamInTable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
  LeagueInfoContext,
  LeagueTeamsInfoContext
} from '../../../Context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';


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

export default function LeagueTable() {
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const { leagueTeamsData, setLeagueTeamsData } = useContext(LeagueTeamsInfoContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);

  function buyPlayers() {
    const params = JSON.stringify({
      "league_id": leagueData.league_id
    });

    //fetch - buy player
    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/ManageLeague/5', {
      method: 'GET',
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
            setLeaguePlayersData({
              teams: result.teams,
            })
            console.log("data received = ", result);
            console.log("==========================");
            console.log("teams data3 = ", result.teams);
          }
          else {
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
          }
        },
        (error) => {
          console.log("err post=", error);
        })
  }










  //sort teams by score
  const sortTeams = [].concat(LeaguePlayersData.players)
    .sort((a, b) => a.points < b.points);

  var renderTable = sortTeams.map((x, ind) => {

    return <TeamInTable
      key={ind}
      nickname={x.nickname}
      place={ind + 1}
      points={x.team_points}
      icon={logos[ind]}
    />
  });


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>טבלת הליגה</Text>
      <Image source={image} style={styles.pic} />
      <Text> </Text>
      <Text style={styles.text}>טבלת הקבוצות</Text>
      <ScrollView>
        {renderTable}
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#4472c4',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  pic: {
    width: '70%',
    borderRadius: 300,
    height: 300,
  },
})