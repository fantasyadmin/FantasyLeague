import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import TeamInTable from './TeamInTable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext } from '../../../Context/UserContext';
import { ScrollView } from 'react-native-gesture-handler';


const players = [
  { user_id: 12, nickname: "ahmed", points: 88 },
  { user_id: 45, nickname: "pele", points: 45 },
  { user_id: 33, nickname: "guy", points: 3 },
  { user_id: 86, nickname: "dor", points: 34 },
]


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


export default function LeagueTable(props) {
  const { userData, setUserData } = useContext(UserDataContext);

  //need to feed the data from props - TBC

  //sort teams by score
  const sortTeams = [].concat(players)
    .sort((a, b) => a.points < b.points);

  console.log("context check = ", userData);

  var renderTable = sortTeams.map((x, ind) => {
    return <TeamInTable
      key={ind}
      nickname={x.nickname}
      place={ind + 1}
      points={x.points}
      icon={logos[ind]}
    />
  });


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>טבלת הליגה</Text>
      <Image source={image} style={styles.pic} />
      <Text style={styles.text}>מספר משחקים ששוחקו:{props.gamesPlayed}</Text>
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