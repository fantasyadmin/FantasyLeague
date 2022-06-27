import React, { useState, useContext, useEffect, useMemo } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
  FantasyTeamInfoContext,
} from "../Context/UserContext";

const ModalPlayerProfile = ({ player, data, user_id }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );
  const { FantasyTeamData, setFantasyTeamData } = useContext(FantasyTeamInfoContext);

  const [userStat, setuserStat] = useState([])

  // const [found] = useMemo(
  //   () => FantasyTeamData.players.find((team) => team.user_id === user_id),
  //   [data],
  // );

  useEffect(() => {
    const found = FantasyTeamData.players.find((obj) => {
      if (obj != null) {
        return obj.user_id == user_id;
      }
      else {
        setuserStat(false)
      }
    });
    setuserStat(found)
    console.log("תוצאות לשחקן", found);
  }, [])

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              ביצועי שחקן {player}
            </Text>
            <View>
              {userStat ? (
                <Text style={styles.stats}>משחקים ששיחק: {userStat.games_played}</Text>
              ) : (
                <Text style={styles.text}>  משחקים ששיחק: 0</Text>
              )}
              {userStat ? (
                <Text style={styles.stats}>נצחונות: {userStat.total_wins}</Text>
              ) : (
                <Text style={styles.text}>  נצחונות: 0</Text>
              )}
              {userStat ? (
                <Text style={styles.stats}>שערים: {userStat.total_goals_scored}</Text>
              ) : (
                <Text style={styles.text}>   שערים: 0</Text>
              )}
              {userStat ? (
                <Text style={styles.stats}>בישולים: {userStat.total_assists}</Text>
              ) : (
                <Text style={styles.text}>   בישולים: 0</Text>
              )}
              {userStat ? (
                <Text style={styles.stats}>החמצות עונשין: {userStat.total_pen_missed}</Text>
              ) : (
                <Text style={styles.text}>   החמצות עונשין: 0</Text>
              )}
              {userStat ? (
                <Text style={styles.stats}>שערים שספג: {userStat.total_goals_recieved}</Text>
              ) : (
                <Text style={styles.text}>   </Text>
              )}
            </View>
            <View style={styles.ButtonView}>
              <Text>             </Text>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.CancelBtn]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>סגור</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>ביצועי שחקן</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  },
  ButtonView: {
    textAlign: "center",
    flexDirection: "row",
    margin: 45,
  },
  CancelBtn: {
    backgroundColor: "red",
  },
  ApproveBtn: {
    backgroundColor: "green",
  },
  stats: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 17
  }
});

export default ModalPlayerProfile;
