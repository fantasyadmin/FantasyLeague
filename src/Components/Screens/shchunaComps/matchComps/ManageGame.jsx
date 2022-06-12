import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons as Icon } from "@expo/vector-icons";
import { UserDataContext } from '../../../Context/UserContext';
import CustomButton from '../../../CustomComps/CustomButton';



export default function ManageExistingGame() {
    const { userData, setUserData } = useContext(UserDataContext);
    const [matchDate, setMatchDate] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [matchLocation, setMatchLocation] = useState("");
    const [teamColor1, setTeamColor1] = useState('#ffff');
    const [teamColor2, setTeamColor2] = useState('#ffff');


    const params = JSON.stringify({
        "matchDate": matchDate,
        "matchTime": matchTime,
        "matchLocation": matchLocation,
        //"teamColor1": teamColor1,
        //"teamColor2": teamColor2,
    });

    function UpdateMatchDetails() {
// fetch - update existing match details

    }



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>                                 משחק עתידי</Text>
            </View>
            <Text></Text>
            <View style={styles.fieldStyle}>
                <Text style={styles.text}>  תאריך:            </Text>
                <View style={styles.textBarLocation}>
                    {userData.match_date}
                </View>

            </View>
            <View style={styles.fieldStyle}>
                <Text style={styles.text}>  שעת המשחק:</Text>
                <View style={styles.textBarLocation}>
                    {userData.match_time}
                </View>

            </View>
            <View style={styles.fieldStyle}>
                <Text style={styles.text}> מיקום:          </Text>
                <View style={styles.textBarLocation}>
                    {userData.match_location}
                </View>

            </View>
            <View style={styles.fieldStyle}>
                <Text style={styles.text}> צבע קבוצה 1:        </Text>
                <View style={styles.itemsLocation}>
                    <Icon
                        name="shirt"
                        style={{ fontSize: 30, color: teamColor1 }}
                    />
                </View>

            </View>
            <View style={styles.fieldStyle}>
                <Text style={styles.text}> צבע קבוצה 2:        </Text>
                <View style={styles.itemsLocation}>
                    <Icon
                        name="shirt"
                        style={{ fontSize: 30, color: teamColor2 }}
                    />
                </View>
            </View>
            <Text></Text>
            <View style={styles.buttons}>
                <CustomButton text="עדכן פרטי משחק" onPress={UpdateMatchDetails} />
            </View>
            <View>
                <View style={styles.buttons}>
                    <CustomButton text="הפעל טיימר" onPress={''} />
                    <Text>      </Text>
                    <CustomButton text="עדכן תוצאות משחק" onPress={''} />
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 300,
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
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        margin: '10%'
    },
})



