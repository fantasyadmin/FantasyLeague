import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { profilePic, image } from '../../../assets/exports';
import CustomButton from '../CustomComps/CustomButton';

const onPressDB = () => {
    console.log('show data from DB');
    fetch('https://192.168.1.1:44355/api/Register', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    })
        .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
        })
        .then(
            (result) => {
                console.log("fetch btnFetchGetStudents= ", result);
                result.map(st => console.log(st.FullName));
                console.log('result[0].FullName=', result);
            },
            (error) => {
                console.log("err post=", error);
            });
}

export default function TopProfileBar(props) {
    return (

        <View style={styles.root}>
            <Image source={profilePic} style={styles.pic} />
            <View>
                <Text style={styles.text}>  פרופיל משתמש</Text>
                <Text></Text>
                <Text style={styles.text}>  שחקן:</Text>
                <Text style={styles.text}>  מספר משחקים:</Text>
                <Text style={styles.text}>  ציון שחקן:</Text>
                <CustomButton onPress={onPressDB} text={'חיבור DB'} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#4472c4',
        height: '25%',
        marginTop: 10,
        borderRadius: 100,
    },
    pic: {
        width: 100,
        borderRadius: 100,
        height: 100,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
})



//// Retch attempts

export const getInfo = () => {
    return fetch('https://localhost:44355/api/Register', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
        })
    })
        .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
        })
        .then(
            (result) => {
                console.log("fetch btnFetchGetStudents= ", result);
                result.map(st => console.log(st));
                console.log('result[0].FullName=', result);
            },
            (error) => {
                console.log("err post=", error);
            });
};
