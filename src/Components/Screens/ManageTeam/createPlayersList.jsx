import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function PlayersInLeague(props) {

    function sendId() {
        //alert(props.nickname)
        props.tellSon(props.nickname, props.user_id);
    }


    return (
        <View style={styles.container} onStartShouldSetResponder={sendId}>
            <TouchableOpacity>{props.icon}</TouchableOpacity>
            <Text style={styles.text3}>pt. {props.points}</Text>
            <Text style={styles.text}> <FontAwesome name="soccer-ball-o" size={35} color="#100" />{props.logo}</Text>
            <Text style={styles.text3}>{props.nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        padding: 0,
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginVertical: 5,
        width: 320,
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        fontWeight: 'bold',
        color: 'white',
        width: 80,
        fontSize: 20,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    text3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
})