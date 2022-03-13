import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';


export default function ResetPassword() {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn('שליחת סיסמה למייל')
        navigation.navigate('Sign Up');
    }

    const onSignInPress = () => {
        console.warn('חזרה לרישום')
        navigation.navigate('Sign Up');
    }

    return (
        <View style={styles.root}>
            <Image source={image} style={styles.pic} />
            <Text>איפוס סיסמה</Text>
            <TextInput
                value={code}
                onChangeText={setCode}
                placeholder={'קוד אימות'}
                style={styles.container}
            />
            <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder={'סיסמה חדשה'}
                style={styles.container}
            />

            <CustomButton text="אישור" onPress={onSubmitPressed} />
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