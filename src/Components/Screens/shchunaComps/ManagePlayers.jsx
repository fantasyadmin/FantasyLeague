import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext } from '../../Context/UserContext';
import TopProfileBar from '../../MenuComponents/TopProfileBar';
import PlayersInLeague from '../ManageTeam/createPlayersList';


export default function ManagePlayers() {
  const { userData, setUserData } = useContext(UserDataContext);

  const delPlayer = <FontAwesome5 name="crown" size={23} color="#993" />

  const logos = <MaterialCommunityIcons name="weight-lifter" size={29} color="#900" />

  const players = [
    { user_id: 12, nickname: "ahmed", points: 88 },
    { user_id: 45, nickname: "pele", points: 45 },
    { user_id: 33, nickname: "guy", points: 3 },
    { user_id: 86, nickname: "dor", points: 34 },
  ]
  

  const sortplayers = [].concat(players).sort();   //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return <PlayersInLeague
      key={x.user_id}
      nickname={x.nickname}
      icon={logos[ind]}
      delPlayer={delPlayer[ind]}
    />
  });


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}>ניהול שחקני הליגה</Text>
        </View>
        <Text></Text>
        <View style={styles.text1}>
          <Text style={styles.text}>צפיה בפרטי שחקן / הסרת שחקן מהליגה</Text>
        </View>
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