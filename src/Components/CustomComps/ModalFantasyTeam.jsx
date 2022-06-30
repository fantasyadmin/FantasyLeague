import React, { useState, useContext, useEffect, useMemo } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
} from "../Context/UserContext";

const ModalFantasyTeam = ({ player, data, user_id }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );
  const [list, setlist] = useState(data)

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
              קבוצת הפנטזי של {player}
            </Text>
            <View>
              {data.pl1 ? (
                Object.keys(data.pl1).map((keys) => {
                  let player = " "
                  if (data.pl1) {
                    return <Text style={styles.playersStyle}>{data.pl1[keys].nickname} </Text>
                  }
                  else {
                    return player
                  }
                })
              ) : (
                <Text style={styles.text}>   </Text>
              )}
              {data.pl2 ? (
                Object.keys(data.pl2).map((keys) => {
                  let player = " "
                  if (data.pl2) {
                    return <Text style={styles.playersStyle}>{data.pl2[keys].nickname} </Text>
                  }
                  else {
                    return player
                  }
                })
              ) : (
                <Text style={styles.text}>  </Text>
              )}
              {data.pl3 ? (
                Object.keys(data.pl3).map((keys) => {
                  let player = " "
                  if (data.pl3) {
                    return <Text style={styles.playersStyle}>{data.pl3[keys].nickname} </Text>
                  }
                  else {
                    return player
                  }
                })

              ) : (
                <Text style={styles.text}>   </Text>
              )}
              {data.pl4 ? (

                Object.keys(data.pl4).map((keys) => {
                  let player = " "
                  if (data.pl4) {
                    return <Text style={styles.playersStyle}>{data.pl4[keys].nickname} </Text>
                  }
                  else {
                    return player
                  }
                })

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
        <Text style={styles.textStyle}>שחקני הקבוצה</Text>
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
  playersStyle: {
    fontWeight: "bold",
    fontSize: 17,
  }
});

export default ModalFantasyTeam;
