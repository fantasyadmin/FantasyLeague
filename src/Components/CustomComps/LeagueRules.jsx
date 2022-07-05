import React, { useState, useContext, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LeagueInfoContext } from "../Context/UserContext";
import CustomButton from "./CustomButton";

const LeagueRulesModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);

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
                                חוקי הליגה
                            </Text>
                            <View style={styles.text}>
                                <Text style={styles.text}>
                                    {leagueData.league_rules ? (
                                        leagueData.league_rules
                                    ) : (
                                        <View style={styles.noResults}>
                                            <Text>לא הוזנו חוקים לליגה</Text>
                                        </View>
                                    )}
                                </Text>
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
                text="חוקי הליגה"
                onPress={() => setModalVisible(true)}
            />
        </View >

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

export default LeagueRulesModal;
