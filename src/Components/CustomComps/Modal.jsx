import React, { useState, useContext, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
} from "../Context/UserContext";

const ModalResult = ({ data, player }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(LeaguePlayersInfoContext);
  const [currentUser, setCurrentUser] = useState(
    {
      user_id: data.user_id,
      goals_scored: data.goals_scored,
      assists: data.assists,
      goals_recieved: data.goals_recieved,
      pen_missed: data.pen_missed,
      wins: data.wins,
    }
  )


  function placeData(data) {
    setCurrentUser(
      {
        user_id: data.user_id,
        goals_scored: data.goals_scored,
        assists: data.assists,
        goals_recieved: data.goals_recieved,
        pen_missed: data.pen_missed,
        wins: data.wins,
      }
    )
  }

  useEffect(() => {
    console.log("modal print ::::", data);
    console.log(" ::::", currentUser);
    for (let index = 0; index < LeaguePlayersData.players.length; index++) {
      data.forEach(element => {
        if (element.user_id == player.user_id) {
          console.log("checking user id = ", player.user_id);
          console.log("ddddDdDdDdDdadadadadadadadadadadadadadadad ",);

          placeData(element)
          return console.log("found results for  ", LeaguePlayersData.players[index].user_id);
        }
        else{
          placeData({
            user_id: 0,
            goals_scored: 0,
            assists: 0,
            goals_recieved: 0,
            pen_missed: 0,
            wins: 0,}
          )
        }
      });

    }
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
              אישור תוצאות של:{player.nickname}
            </Text>
            <View>
              <Text>
                שערים שכבש : {currentUser.goals_scored}
                {"\n"}
              </Text>
              <Text>
                בישולים:{currentUser.assists}
                {"\n"}
              </Text>
              <Text>
                שערים שספג כשוער:{currentUser.goals_recieved} {"\n"}
              </Text>
              <Text>
                פנדלים שהוחמצו: {currentUser.pen_missed}
                {"\n"}
              </Text>
              <Text>
                מספר נצחונות:{currentUser.wins} {"\n"}
              </Text>
            </View>
            <View style={styles.ButtonView}>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.ApproveBtn]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>אשר</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.CancelBtn]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>דחה</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>צפייה בתוצאות</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    borderRadius: 20,
    padding: 10,
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
});

export default ModalResult;
