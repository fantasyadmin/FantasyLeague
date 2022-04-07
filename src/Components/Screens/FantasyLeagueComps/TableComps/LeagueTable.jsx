import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import TeamInTable from './TeamInTable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";


const teams = [
  { nickname: "hamed", points: 32 },
  { nickname: "guy", points: 51 },
  { nickname: "gal", points: 13 },
  { nickname: "dor", points: 42 },
  { nickname: "nir", points: 77 },
  { nickname: "amit", points: 666 }]

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

  //need to feed the data from props - TBC

  //sort teams by score
  const sortTeams = [].concat(teams)
    .sort((a, b) => a.points < b.points);

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
      <Text>
        {renderTable}
      </Text>
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