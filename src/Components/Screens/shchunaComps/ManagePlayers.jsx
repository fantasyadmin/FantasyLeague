import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { image } from '../../../../assets/exports';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserDataContext, LeaguePlayersInfoContext, FantasyTeamInfoContext, LeagueInfoContext } from '../../Context/UserContext';
import PlayersInLeague from '../ManageTeam/createPlayersList';


export default function ManagePlayers() {
  const [toDel, setToDel] = useState()
  const { userData, setUserData } = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);

  const logos = <AntDesign name="deleteuser" size={29} color="#900" />

  const sortplayers = [].concat(LeaguePlayersData.players).sort();   //userData.listed

  var renderTable = sortplayers.map((x, ind) => {
    return <View style={styles.tableRow}>
      <PlayersInLeague
        key={ind}
        nickname={x.nickname}
        points={x.player_score}
        icon={logos}
        user_id={x.user_id}
        tellSon={markPlayerToDelete}
      />
    </View>
  });


  function markPlayerToDelete(nickname, user_id) {
    setToDel(user_id);
    console.log("deletion Candidate = ", user_id);

    Alert.alert(
      'שים לב! ',
      'האם אתה בטוח שברצונך למחוק את  '
      + nickname +
      '  מהליגה? \n\nברגע שתלחץ על כפתור האישור לא תוכל לשחזר את הנתונים וכרטיס השחקן יימחק! ',
      [
        {
          text: 'ביטול',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '         ' },
        { text: 'מחק שחקן מהליגה', onPress: () => deletePlayerAPI(toDel, leagueData.league_id) },
      ],
      { cancelable: false },
    );
  }

  function deletePlayerAPI(id, league) {
    const params = JSON.stringify({
      "user_id": id,
      "league_id": league
    });
    if (id) {
      console.log(id);
      //fetch - delete player
      fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/ManageLeague/5' + { id, league }, {
        method: 'DELETE',
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
            console.log({ result });
            if (result.team_id != undefined) {
              removeItem(toDel);
              console.log("data received = ", result);
              console.log("==========================");

            }
            else {
              alert("אחד או יותר מהפרטים שהזנת אינם נכונים, נסה שנית");
            }
          },
          (error) => {
            console.log("err post=", error);
          })
    }
    else {
      alert("לא נבחר שחקן למחיקה")
    }
  }


  const removeItem = (index) => {
    setLeaguePlayersData(data.filter((o, i) => index !== i));
  };



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
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#4472c4',
    paddingHorizontal: 0,
    marginHorizontal: 0
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
  tableRow: {
    flex: 1,
    flexDirection: 'row',
  },
})