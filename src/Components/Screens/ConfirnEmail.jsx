import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function MailConfirm() {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onMailConfirm = () => {
        console.warn('אישור מייל וכניסה')
        //אישור קוד מהמייל
        navigation.navigate('Sign In');
    }

    const onResendCode = () => {
        console.warn('שליחת קוד למייל שוב')

    }

    const onSignInPress = () => {
        console.warn('חזרה לרישום')
        navigation.navigate('Sign Up');
    }

    return (
        <View style={styles.root}>
            <Image source={image} style={styles.pic} />
            <TextInput
                value={code}
                onChangeText={setCode}
                placeholder={'הקלד את קוד האימות שהתקבל בדוא"ל'}
                style={styles.container}
            />
            <CustomButton text="אמת כתובת דוא''ל" onPress={onMailConfirm} />
            <Text>            </Text>
            <CustomButton text="שלח קוד שנית" onPress={onResendCode} />
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
    },
    root: {
        width: '100%',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#4472c4',
    },
    pic: {
        width: '100%',
        height: 420,
    },
    link: {
        color: '#fdb075'
    },
})