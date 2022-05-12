import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons as Icon } from "@expo/vector-icons";
import { UserDataContext } from '../../Context/UserContext';
import { ColorPicker, StatusColorPicker } from 'react-native-status-color-picker';
import CustomButton from '../../CustomComps/CustomButton';


export default function NewGame() {
  const { userData, setUserData } = useContext(UserDataContext);
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchLocation, setMatchLocation] = useState("");
  const [teamColor1, setTeamColor1] = useState('#ffff');
  const [teamColor2, setTeamColor2] = useState('#ffff');
  const [visible, setVisible] = useState(false);
  const [colors, setColors] = useState(["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]);
  const [selectedColor, setSelectedColor] = useState("");



  const params = JSON.stringify({
    "matchDate": matchDate,
    "matchTime": matchTime,
    "matchLocation": matchLocation,
    "teamColor1": teamColor1,
    "teamColor2": teamColor2,
  });


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>                            צור משחק חדש</Text>
      </View>
      <Text></Text>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר תאריך:</Text>
        <View style={styles.textBarLocation}>
          <TextInput
            value={matchDate}
            onChangeText={setMatchDate}
            placeholder={'  תאריך'}
            style={styles.container2}
          />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}>  בחר שעה:   </Text>
        <View style={styles.textBarLocation}>
          <TextInput
            value={matchTime}
            onChangeText={setMatchTime}
            placeholder={'  שעת משחק'}
            style={styles.container2}
          />
        </View>

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
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: teamColor1 }}
            onPress={() => setVisible(true)}
          />
        </View>

      </View>
      <View style={styles.fieldStyle}>
        <Text style={styles.text}> צבע קבוצה 2:        </Text>
        <View style={styles.itemsLocation}>
          <Icon
            name="shirt"
            style={{ fontSize: 30, color: teamColor2 }}
            onPress={() => setVisible(true)}
          />
        </View>

      </View>
      <View style={styles.buttons}>
        <CustomButton text="קבע משחק" onPress={''} />
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

