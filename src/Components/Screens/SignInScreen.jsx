import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import React, { useState } from 'react';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Bottom from '../MenuComponents/Bottom_Menu';


export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPress = () => {
        console.warn('Sign In');
        //validate user
        navigation.navigate('Bottom');
    }

    const onForgotPasswordPress = () => {
        console.warn('forgot password');
        navigation.navigate('Forgot Password');
    }

    const onCreateNewAccountPress = () => {
        console.warn('create new account');
        navigation.navigate('Sign Up');
    }


    return (
        <View style={styles.root}>
            <Image source={image} style={styles.pic} />
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder={'שם משתמש'}
                style={styles.container}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={'סיסמה'}
                style={styles.container}
                secureTextEntry
            />
            <CustomButton text="כניסה" onPress={onSignInPress} />
            <CustomButton text="שכחתי סיסמה" onPress={onForgotPasswordPress} />
            <Text>            </Text>
            <CustomButton text="צור חשבון חדש" onPress={onCreateNewAccountPress} />
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
        textAlign: 'right'
    },
    root: {
        width: '100%',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#4472c4',
    },
    pic: {
        width: '100%',
        height: 450,
    },
})