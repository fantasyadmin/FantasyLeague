import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { image } from '../../../assets/exports';
import React, { useState } from "react";
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';




export default function ForgotPassword() {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();


    const onSendPressed = () => {
        navigation.navigate('Mail Confirmation');
    }

    const onSignInPress = () => {
        navigation.navigate('Sign Up');
    }


    return (
        <View style={styles.root}>
            <Image source={image} style={styles.pic} />
            <Text style={styles.text}> שחזור סיסמה</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder={'שם משתמש'}
                style={styles.container}
            />
            <CustomButton text="שלח" onPress={onSendPressed} />
            <Text>            </Text>
            <CustomButton text="חזור לרישום" onPress={onSignInPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        //borderColor: "grey",
    },
    root: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#4472c4',
        marginTop: 10
    },
    pic: {
        width: '100%',
        height: 420,
    },
    link: {
        color: '#fdb075'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
})