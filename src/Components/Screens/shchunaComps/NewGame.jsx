import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserDataContext,
  LeagueInfoContext,
  FantasyTeamInfoContext,
  LeaguePlayersInfoContext,
  MatchInfoContext,
  LeagueTeamsInfoContext
} from '../../Context/UserContext';
import CustomButton from '../../CustomComps/CustomButton';
import ColorPicking from '../../CustomComps/ColorPicker';
import { PickTime } from './matchComps/Calander/TimePicker';
import { PickDate } from './matchComps/Calander/datePicker';
import { useNavigation } from '@react-navigation/native';


export default function NewGame() {
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const [matchLocation, setMatchLocation] = useState([{ 'lat': 11.12123123, 'lng': 21.12312312 }]);
  const navigation = useNavigation();


  const getColorFromChild = (selectedColor, teamNo) => {
    console.log({ selectedColor, teamNo })
    console.log('in parent data from child', teamNo);
    if (teamNo == 1) {
      setMatchData(prevState => ({ ...prevState, team_color1: selectedColor }));
      console.log("team 1 color", matchData.team_color1);
    }
    else {
      setMatchData(prevState => ({ ...prevState, team_color2: selectedColor }));
      console.log("team 2 color", matchData.team_color2);
    }
  }

  const matchTimeFunc = (data) => {
    console.log(data)
    setMatchData(prevState => ({ ...prevState, match_time: data }));
  }

  const matchDateFunc = (data) => {
    console.log(data)
    setMatchData(prevState => ({ ...prevState, match_date: data }));
  }

  const matchLocationFunc = (data) => {
    console.log("match location func ====== ", data)
    setMatchData(prevState => ({ ...prevState, match_location: {latitude: data.coords.latitude, longitude: data.coords.longitude} }));
  }

  const showMap = () => {
    //console.log(data)
    //setMatchData(prevState => ({ ...prevState, match_date: data }));
    navigation.navigate('Map', matchLocationFunc)
  }

  function setMatchApi() {
    const params = JSON.stringify({
      "match_date": matchData.match_date,
      "match_time": matchData.match_time,
      "lat": matchData.match_location.latitude,
      "lng": matchData.match_location.longitude,
      // "lat": matchLocation[0].lat,
      // "lng": matchLocation[0].lng,
      "team_color1": matchData.team_color1,
      "team_color2": matchData.team_color2,
      "league_id": leagueData.league_id
    });
    console.log(params);

    //fetch - update match in DB and set info in context
    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/Match', {
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
          console.log({ result })
          if (result.matchDateStr != undefined) {
            console.log("data received = ", result);
            console.log("==========================");
            console.log("user data3 = ", result.matchDateStr);
            alert("המשחק נקבע בתאריך: " + result.matchDateStr + "\nבשעה: " + result.match_time + "!")
            //navigation.navigate('Home');
          }
          else {
            console.log(params);
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
          }
        })
      .catch(
        (error) => {
          console.log("err post=", error);
        })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>                            צור משחק חדש</Text>
      </View>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר תאריך:</Text>
        <PickDate uplift={(data) => matchDateFunc(data)} />

      </View>
      <Text></Text>
      <Text></Text>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר שעה:   </Text>
        <PickTime uplift={(data) => matchTimeFunc(data)} />
      </View>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}> מיקום:          </Text>
        <View style={styles.textBarLocation}>
          <CustomButton onPress={showMap} />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 1:        </Text>
        <View style={styles.itemsLocation}>
          <ColorPicking tellPapa={getColorFromChild} team={1} />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2:        </Text>
        <View style={styles.itemsLocation}>
          <ColorPicking tellPapa={getColorFromChild} team={2} />
        </View>

      </View>
      <View style={styles.buttons}>
        <CustomButton text="קבע משחק" onPress={setMatchApi} />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#4472c4',
    direction: 'rtl'
  },
  container2: {
    backgroundColor: '#fff',
    width: '60%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginVertical: 5,
    textAlign: 'right',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingRight: 5,
    marginLeft: 7
  },
  text1: {
    marginRight: 0,
    direction: 'rtl'
  },
  fieldStyle: {
    flexDirection: 'row',
    marginTop: 15,
  },
  itemsLocation: {
    paddingLeft: 10,
    width: '10%'
  },
  textBarLocation: {
    paddingLeft: 50,
    width: '100%'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    margin: '30%'
  },
})