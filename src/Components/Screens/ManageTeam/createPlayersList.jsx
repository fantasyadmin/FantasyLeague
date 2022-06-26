import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ModalPlayerProfile from '../../CustomComps/ModalPlayerProfile';

export default function PlayersInLeague(props) {

    function sendId() {
        //alert(props.nickname)
        props.tellSon(props.nickname, props.user_id, props.color);
    }


    return (
        <View style={styles.container} onStartShouldSetResponder={sendId}>
            {props.points > 0 ? (
                <ModalPlayerProfile player={props.nickname} user_id={props.user_id} data={''} />
            ) : (
                <View style={styles.noResults}>
                    <Text style={styles.text}>אין נתונים</Text>
                </View>
            )}
            <Text style={styles.text3}>pt. {props.points}</Text>
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
        width: "100%",
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
        marginVertical: 6,
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
    noResults: {
        backgroundColor: "red",
        borderRadius: 180,
        color: "white",
        width: 79,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 19,
        paddingHorizontal: 17,
        marginVertical: 4,
        marginLeft: 11
      },
})