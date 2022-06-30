import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../../CustomComps/CustomButton';
import { image } from '../../../../../assets/exports';
import { useNavigation } from '@react-navigation/native';
import { UserDataContext, LeagueInfoContext } from '../../../Context/UserContext';


export default function EditLeagueDetails() {
    const { userData, setUserData } = useContext(UserDataContext);
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const [leagueName, setLeagueName] = useState('');
    const [leagueChat, setLeagueChat] = useState('');

    const navigation = useNavigation();

    const data = JSON.stringify({
        "league_name": '',
        "league_picture": '',
        "league_rules": leagueData.league_rules,
        "league_id": leagueData.league_id,
        "invite_url": leagueChat
    });


    const onCreateLeaguePress = () => {
        console.log("id is: ", leagueData.league_id);
        console.log("create league = ", data);
        fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/EditLeague', {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            }),
            body: data
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });
        alert("צ'אט הליגה נערך")
        navigation.navigate('Home')
    }

    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <Image source={image} style={styles.pic} />
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={styles.text}>
                <Text style={styles.text}>        צ'אט הליגה:    </Text>
                <Text>            הזן את הקישור לקבוצת הוואצאפ שתרצה לשייך לליגה. {"\n"}            דרכו יוכלו החברים בליגה להיכנס לקבוצה</Text>
                <TextInput
                    multiline
                    numberOfLines={8}
                    value={leagueChat}
                    placeholder={'הזן את הקישור לקבוצת הוואצאפ '}
                    style={styles.inputField}
                    onChangeText={setLeagueChat}
                />
            </View>
            <View style={styles.container}>
                <CustomButton text="שמור נתונים" onPress={onCreateLeaguePress} />
            </View>
            <View style={styles.container}>
                <CustomButton text="חזור ללא שמירה" onPress={() => navigation.navigate('Home')
                } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#4472c4',
        height: "100%"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        padding: 5
    },
    pic: {
        width: '70%',
        borderRadius: 300,
        height: 300,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    text2: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    inputField: {
        height: 50,
        margin: 30,
        borderWidth: 1,
        padding: 10,
        color: 'white',
    },
    container1: {
        backgroundColor: '#fff',
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'right'
    },
})
