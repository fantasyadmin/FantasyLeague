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
              {data ? (

                Object.keys(data.pl1).map((keys) => {
                  return <Text style={styles.playersStyle}>{data.pl1[keys].nickname} </Text>
                })

              ) : (
                <Text style={styles.text}>  שחקן לא קיים </Text>
              )}
              {data ? (

                Object.keys(data.pl1).map((keys) => {
                  return <Text style={styles.playersStyle}>{data.pl2[keys].nickname} </Text>
                })

              ) : (
                <Text style={styles.text}>  שחקן לא קיים </Text>
              )}
              {data != null ? (

                Object.keys(data.pl1).map((keys) => {
                  return <Text style={styles.playersStyle}>{data.pl3[keys].nickname} </Text>
                })

              ) : (
                <Text style={styles.text}>  שחקן לא קיים </Text>
              )}
              {data ? (

                Object.keys(data.pl1).map((keys) => {
                  return <Text style={styles.playersStyle}>{data.pl4[keys].nickname} </Text>
                })

              ) : (
                <Text style={styles.text}>  שחקן לא קיים </Text>
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
