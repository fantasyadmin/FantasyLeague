import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import ModalPlayerProfile from '../../CustomComps/ModalPlayerProfile';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { image } from '../../../../assets/exports';

export default function PlayersInLeague(props) {
    const [icon, setIcon] = useState()

    function sendId() {
        props.tellSon(props.nickname, props.user_id, props.color);
    }

    return (
        <Pressable style={styles.container} onPress={sendId} >
            {props.icon}
            {props.points > 0 ? (
                <ModalPlayerProfile player={props.nickname} user_id={props.user_id} data={''} />
            ) : (
                <View style={[styles.button, styles.buttonOpen]}>
                    <Text style={styles.textStyle}> אין{"\n"}נתונים</Text>
                </View>
            )}
            <Text style={styles.text3}>נק': {props.points}</Text>
            <Text style={styles.text3}>{props.nickname}</Text>
            {props.picture ? (
                <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/fantasyleagueneighborhoo-fe0e1.appspot.com/o/" + props.picture + "?alt=media&token=e96a14e8-36bf-4c1b-b58d-a75e1863a590" }}
                    style={styles.profilePic} />
            ) : (
                <Image source={image} style={styles.profilePic} />
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        marginTop: 10,
        width: 40,
        height: 40,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 100,
        overflow: 'hidden',
        paddingVertical: 3,
    },
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 3,
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
    text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 19,
        paddingHorizontal: 5,
        marginVertical: 5,
        position: 'relative',

    },
    noResults: {
        backgroundColor: "#990000",
        borderRadius: 180,
        color: "white",
        width: 79,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        paddingHorizontal: 17,
        marginVertical: 17,
        marginLeft: 11
    },
    button: {
        borderRadius: 10,
        padding: 5,
        elevation: 2,
        margin: 8
    },
    buttonOpen: {
        backgroundColor: "#990000",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
})