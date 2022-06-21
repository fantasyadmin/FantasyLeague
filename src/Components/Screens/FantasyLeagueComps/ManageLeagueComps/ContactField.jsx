import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ContactField(props) {
    const [borderColor, setBorderColor] = useState('#e8e8e8')


    function sendId() {
        alert(props.name + "    " + props.phone)
        props.tellSon(props.phone);
    }

    function changeColor() {
        if (props.markedSelect) {
            setBorderColor('red')
        }
        else {
            setBorderColor('#e8e8e8')
        }
        console.log("pressed");
    }


    return (
        <View style={
            {
                flex: 1,
                flexGrow: 1,
                flexDirection: 'row-reverse',
                padding: 0,
                backgroundColor: '#4472c4',
                borderColor: borderColor,
                borderWidth: 1,
                paddingHorizontal: 5,
                marginVertical: 5,
                width: 320,
            }
        } onTouchEnd={sendId}>
            <View>
                <Pressable onPress={setBorderColor} selected={changeColor}>
                    <Text style={styles.text3}>{props.name}</Text>
                </Pressable>
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
        //borderColor: '#e8e8e8',
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