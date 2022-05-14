import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons as Icon } from "@expo/vector-icons";
import { UserDataContext } from '../../Context/UserContext';
import { ColorPicker, StatusColorPicker } from 'react-native-status-color-picker';
import CustomButton from '../../CustomComps/CustomButton';
import ColorPicking from '../../CustomComps/ColorPicker';
import Calander from './matchComps/Calander/datePicker';
import { Button } from 'react-native-paper';
import PickDate from './matchComps/Calander/datePicker';
import { PickTime } from './matchComps/Calander/TimePicker';




export default function NewGame() {
  const { userData, setUserData } = useContext(UserDataContext);
  const [matchTime, setMatchTime] = useState("");
  const [matchLocation, setMatchLocation] = useState("");
  const [teamColor1, setTeamColor1] = useState('#ffff');
  const [teamColor2, setTeamColor2] = useState('#ffff');


  const params = JSON.stringify({
    "matchDate": userData.match_date,
    "matchTime": '',
    "matchLocation": '',
    "teamColor1": '',
    "teamColor2": '',
  });

getDataFromChild = (data) => {
  console.log('in parent data from child', data);
  if (data.teamNo == 1) {
    setTeamColor1(data.selectedColor);
    console.log("team 1 color", teamColor1);
  }
  else {
    setTeamColor2(data.selectedColor);
    console.log("team 2 color", teamColor2);
  }
}



  function setMatch() {
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
          if (result.nickname != undefined) {
            setUserData({
              //match_date: result.match_date,
              //match_time: result.match_time,
              //location: result.location,
              //teamColor1: result.team_color1,
              //teamColor2: result.team_color2,
            })
            console.log("data received = ", result);
            console.log("==========================");
            console.log("user data3 = ", result.match_date);
          }
          else {
            alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
          }
        },
        (error) => {
          console.log("err post=", error);
        })
      .then(navigation.navigate('Bottom'));

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>                            צור משחק חדש</Text>
      </View>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר תאריך:</Text>
      </View>
      <Text></Text>
      <Text></Text>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר שעה:   </Text>
        <PickTime />
      </View>

      <View style={styles.fieldStyle}>
        <Text style={styles.text}> מיקום:          </Text>
        <View style={styles.textBarLocation}>
          <TextInput
            value={matchLocation}
            onChangeText={setMatchLocation}
            placeholder={'  מיקום'}
            style={styles.container2}
          />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 1:        </Text>
        <View style={styles.itemsLocation}>
          <ColorPicking tellPapa={getDataFromChild} team={1} />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2:        </Text>
        <View style={styles.itemsLocation}>
          <ColorPicking tellPapa={getDataFromChild} team={2} />
        </View>

      </View>
      <View style={styles.buttons}>
        <CustomButton text="קבע משחק" onPress={''} />
      </View>
    </SafeAreaView>
  )
}


//<TextInput
//value={matchDate}
//onChangeText={setMatchDate}
//placeholder={'  תאריך'}
//style={styles.container2}
///>

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


//Icon
//name="palette"
//style={{ fontSize: 34, color: selectedColor }}
//onPress={() => setVisible(true)}

//StatusColorPicker
//visible={visible}
//colors={colors}
//selectedColor={setSelectedColor}
//onOk={ok2(selectedColor)}
//onCancel={close}

