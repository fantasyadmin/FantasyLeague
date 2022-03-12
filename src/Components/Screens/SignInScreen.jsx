import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';


const onSignInPress = () => { }

export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <CustomButton text="שכחתי סיסמה" onPress={onSignInPress} />
            <Text>            </Text>
            <CustomButton text="צור חשבון חדש" onPress={onSignInPress} />
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
        height: 450,
    },
})