import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext } from '../../Context/UserContext';
import TopProfileBar from '../../MenuComponents/TopProfileBar';
import PlayersInLeague from './createPlayersList';

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


export default function ManageTeam() {
  const { userData, setUserData } = useContext(UserDataContext);


  const sortplayers = [].concat(players).sort();   //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      points={x.points}
      icon={logos[ind]}      // work on different icons
    />
  });



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TopProfileBar/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <Text style={styles.text}>קבוצת פנטזי</Text>
        </View>
        <Text></Text>
        <View style={styles.text1}>
          <Text style={styles.text}>דירוג קבוצה בליגה:</Text>
          <Text style={styles.text}>סה"כ נקודות:</Text>
          <Text style={styles.text}>תקציב:</Text>
        </View>
        <Text></Text>
        <Text></Text>
        <View>
          {renderTable}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 400,
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
  text1: {
    marginRight: 0,
    direction: 'rtl'
  },
  pic: {
    width: '70%',
    borderRadius: 300,
    height: 300,
  },
})