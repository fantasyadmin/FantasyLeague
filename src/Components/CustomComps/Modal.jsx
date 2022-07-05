import React, { useState, useContext, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {
  UserDataContext,
  LeaguePlayersInfoContext,
} from "../Context/UserContext";

const ModalResult = ({ data, player }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(UserDataContext);
  const { LeaguePlayersData, setLeaguePlayersData } = useContext(
    LeaguePlayersInfoContext
  );


  function ApproveResults() {
    const send = {
      user_id: player.user_id,
      match_id: data.match_id,
      apporval_status: "1"
    };
    try {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/SmartCalc", {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(send),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log({ result });
          
          setModalVisible(!modalVisible)
        });
    } catch (err) {
      console.log(err);
      alert("משהו השתבש, אנא נסה שנית")
    }
  }

  function DenyResults() {
    const send = {
      user_id: player.user_id,
      match_id: data.match_id,
      apporval_status: "0"
    };
    try {
      fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/SmartCalc", {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(send),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log({ result });
          setModalVisible(!modalVisible)
        });
    } catch (err) {
      console.log(err);
      alert("משהו השתבש, אנא נסה שנית")
    }
  }


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              אישור תוצאות של {player.nickname}
            </Text>
            <View>
              <Text>
                שערים שכבש : {data.goals_scored}
                {"\n"}
              </Text>
              <Text>
                בישולים:{data.assists}
                {"\n"}
              </Text>
              <Text>
                שערים שספג כשוער:{data.goals_recieved} {"\n"}
              </Text>
              <Text>
                פנדלים שהוחמצו: {data.pen_missed}
                {"\n"}
              </Text>
              <Text>
                מספר נצחונות:{data.wins} {"\n"}
              </Text>
            </View>
            <View style={styles.ButtonView}>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.ApproveBtn]}
                onPress={ApproveResults}
              >
                <Text style={styles.textStyle}>אשר</Text>
              </Pressable>
              <Text>             </Text>
              <Pressable
                style={[styles.button, styles.buttonClose, styles.CancelBtn]}
                onPress={DenyResults}
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
});

export default ModalResult;
