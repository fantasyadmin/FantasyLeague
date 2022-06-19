import React, { useState, useContext, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { UserDataContext } from "../Context/UserContext";
import { TempUserDataContext } from "../Context/TempUserContext";

const ModalResult = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userData = useContext(UserDataContext);
  const TempUserData = useContext(TempUserDataContext);
  const [currentUser, setCurrentUser] = useState({
    nickname: 1,
    total_goals_scored: 1,
    total_assists: 1,
    total_goals_recieved: 1,
    total_pen_missed: 1,
    total_wins: 1,
  })


  // useEffect(() => {
  //   TempUserData.forEach(x => {
  //     console.log("pqpqpqpqpqpqpqpqpqpqpqpq", player.user_id);
  //     if (x.user_id == player.user_id) {
  //       setCurrentUser({
  //         nickname: x.m1.nickname,
  //         total_goals_scored: x.m1.total_goals_scored,
  //         total_assists: x.m1.total_assists,
  //         total_goals_recieved: x.m1.total_goals_recieved,
  //         total_pen_missed: x.m1.total_pen_missed,
  //         total_wins: x.m1.total_wins,
  //       })
  //       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", x);
  //     }
  //   });
  //   return () => {
  //     console.log("112123123123123123123123123312");
  //   }
  // }, [])

  // function getScores(dataReq) {
  //   TempUserData.forEach(x => {
  //     console.log("pqpqpqpqpqpqpqpqpqpqpqpq", player.user_id);
  //     if (x.user_id == player.user_id) {
  //       setCurrentUser({
  //         nickname: x.m1.nickname,
  //         total_goals_scored: x.m1.total_goals_scored,
  //         total_assists: x.m1.total_assists,
  //         total_goals_recieved: x.m1.total_goals_recieved,
  //         total_pen_missed: x.m1.total_pen_missed,
  //         total_wins: x.m1.total_wins,
  //       })
  //     }
  //   });
  //   return currentUser[dataReq]
  // }



  // useEffect(() => {
  //   const data = {
  //     league_id: leagueData.league_id,
  //   };
  //   console.log(data);
  //   try {
  //     fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/SmartCalc", {
  //       method: "POST",
  //       headers: new Headers({
  //         "Content-type": "application/json; charset=UTF-8",
  //         Accept: "application/json; charset=UTF-8",
  //       }),
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => {
  //         console.log("res=", JSON.stringify(res));
  //         return res.json();
  //       })
  //       .then((result) => {
  //         console.log(result);
  //         const approvals = [].concat(result);
  //         const leaguePlayers = [].concat(LeaguePlayersData);
  //         console.log("league players =======", leaguePlayers);
  //         var playersList = approvals.map((x, ind) => {
  //           // שמייצר שורה בטבלה רק לשחקנים עם תוצאות שלא אושרו עדיין (מהפאצ')
  //           leaguePlayers.forEach((p) => {
  //             if (x.user_id == p.user_id) {
  //               <PlayersInLeague
  //                 key={x.user_id}
  //                 nickname={p.nickname}
  //                 //points={x.player_score}
  //                 icon={logos[ind]}
  //                 user_id={x.user_id}
  //                 //tellSon={markPlayerToWatch}
  //               />;
  //             }
  //           });
  //         });
  //         setRenderData(playersList);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);









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
              אישור תוצאות של:{props.player.nickname}
            </Text>
            <View>
              <Text>
                שערים שכבש : {currentUser.total_goals_scored}
                {"\n"}
              </Text>
              <Text>
                בישולים:{currentUser.total_assists}
                {"\n"}
              </Text>
              <Text>
                שערים שספג כשוער:{currentUser.total_goals_recieved} {"\n"}
              </Text>
              <Text>
                פנדלים שהוחמצו: {currentUser.total_pen_missed}
                {"\n"}
              </Text>
              <Text>
                מספר נצחונות:{currentUser.total_wins} {"\n"}
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
