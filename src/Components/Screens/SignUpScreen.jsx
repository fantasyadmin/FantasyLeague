import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setverifyPassword] = useState('');
    const navigation = useNavigation();


    const onSignUpPress = () => {
        console.warn('רישום פרטי משתמש ואישור מייל')
        //רישום משתמש
        navigation.navigate('Mail Confirmation');
    }

    const onClickTermsOfUse = () => {
        //תנאי שימוש
        console.warn('Terms of use redirect')
    }

    const onExistingAcount = () => {
        navigation.navigate('Sign In');
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
                value={email}
                onChangeText={setEmail}
                placeholder={'דוא"ל'}
                style={styles.container}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={'סיסמה'}
                style={styles.container}
                secureTextEntry
            />
            <TextInput
                value={verifypassword}
                onChangeText={setverifyPassword}
                placeholder={'אמת'}
                style={styles.container}
                secureTextEntry
            />
            <CustomButton text="אשר כתובת מייל והיכנס" onPress={onSignUpPress} />
            <Text>אני מאשר כי קראתי והסכמתי
                <Text style={styles.link} onPress={onClickTermsOfUse}> לתנאי השימוש ומדיניות הפרטיות </Text>
                באפליקציית Fantasy League צ'כונה
            </Text>
            <Text onPress={onExistingAcount}>כבר יש לי חשבון</Text>
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