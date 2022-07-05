import React, { useState, useContext, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../../../CustomComps/CustomButton";

const RulesModal = ({ data, player }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
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
                איך מנהלים ליגה?
              </Text>
              <View style={styles.text}>
                <Text style={styles.text}>בתור מנהל ליגה אתה יכול לאשר או לדחות את התוצאות שהשחקנים האחרים ממלאים.{"\n"}</Text>
                <Text style={styles.text}>שחקן שלא מילא את תוצאות המשחק שלו עד לתחילת יום הטורניר הבא - יאבד את ההזדמנות להזין את התוצאות.{"\n"}</Text>
                <Text style={styles.text}>כשמנהל הליגה דוחה את התוצאות שהוגשו לשחקן - על השחקן להזין את התוצאות בשנית.{"\n"}</Text>
                <Text style={styles.text}>מנהל הליגה יכול לאפס את תוצאות כל השחקנים בליגה בכל תקופה שיקצה - פעולה זו אינה ניתנת לשחזור וכלל השחקנים מתחילים מ-0{"\n"}</Text>
                <Text style={styles.text}>ניתן לקשר לאפליקציית הפנטזי קבוצת whatsapp וכל מי שחבר בליגה יוכל להצטרף לקבוצה.{"\n"}</Text>
                <Text style={styles.text}>לבעיות, שאלות ושיתופי פעולה צרו קשר: fantasyleaguehood@gmail.com</Text>
              </View>

              <View style={styles.ButtonView}>
                <Pressable
                  style={[styles.button, styles.buttonClose, styles.ApproveBtn]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>הבנתי</Text>
                </Pressable>
                <Text>             </Text>
              </View>
            </View>
          </View >
        </Modal >
      </View >
      <CustomButton
        text="הסבר על ניהול ליגה"
        onPress={() => setModalVisible(true)}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  centeredView: {

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
  text: {
    fontSize: 15,
  }
});

export default RulesModal;
