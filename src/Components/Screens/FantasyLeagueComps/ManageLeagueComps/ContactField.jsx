import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function ContactField(props) {

    function sendId(data) {
        alert(props.name + "    " + props.phone)
        //props.tellSon(data.phone);
    }

    return (
        <View style={styles.container} onTouchEnd={sendId}>
            <View>
                <Text style={styles.text3}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row-reverse',
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
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        fontWeight: 'bold',
        color: 'white',
        width: 80,
        fontSize: 20,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    text3: {
        flex: 1,
        direction: 'rtl',
        flexDirection: 'row',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
})