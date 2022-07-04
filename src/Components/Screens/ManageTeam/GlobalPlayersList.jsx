import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ModalPlayerProfile from '../../CustomComps/ModalPlayerProfile';

export default function GlobalPlayersList(props) {
    const [icon, setIcon] = useState()

    function sendId() {
        props.tellSon(props.nickname, props.user_id, props.color);
    }

    return (
        <View style={styles.container} onStartShouldSetResponder={sendId}>
            {props.icon}
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
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        marginVertical: 9,
        borderRadius: 10,
        borderWidth: 1,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 8,
    },
    text3: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
})