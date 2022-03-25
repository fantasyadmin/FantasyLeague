import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { image } from '../../../assets/exports';
import React, { useState } from 'react';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
//import { postMethLogin } from '../../../APIActions/apiRequests';


export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPress = () => {
        //postMethLogin(username, password);
        const msg = JSON.stringify({
            "email": username,
            "password": password
        })

        fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/LogIn/5?email=${username}&password=${password}", {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            }),
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    if (result.status.ok) {
                        console.log("fetch POST= ", result);
                        console.log(result.username);
                        setUsername(result.username);
                        navigation.navigate('Bottom', { username: { username } });
                    }

                },
                (error) => {
                    console.log("err post=", error);
                });
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
                onChangeText={newName => setUsername(newName)}
                placeholder={'שם משתמש'}
                style={styles.container}
            />
            <TextInput
                value={password}
                onChangeText={newPas => setPassword(newPas)}
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
        height: '50%',
    },
})


const postMethLogin = (s) => {
    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/LogIn/5', {
        method: 'GET',
        headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify({
            'email': s.email,
            'password': s.password
        })
    })
        .then(res => {
            console.log('res=', res);
            return res.json()
        })
        .then(
            (result) => {
                if (result.status.ok) {
                    navigation.navigate('Bottom', { username: { username } });
                }
            },
            (error) => {
                console.log("err post=", error);
            });
}