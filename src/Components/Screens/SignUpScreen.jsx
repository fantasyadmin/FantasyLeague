import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { image } from '../../../assets/exports';
import React, { useState } from 'react';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { postRegister } from '../../../APIActions/apiRequests';


export default function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifypassword, setverifyPassword] = useState('');
    const [league_id, setleagueId] = useState('0');
    const [userId, setUserId] = useState('');


    const navigation = useNavigation();

    const registerUser = JSON.stringify({
        "nickname": username,
        "email": email,
        "password": password,
        "league_id": league_id
    });

    //user registration
    const onSignUpPress = () => {
        if (password == verifypassword) {
            setUserId(postRegister(registerUser)) 
           if (league_id == '0') {
                console.log("data  =", userId);
                navigation.navigate('Create League', userId);
            }
            else {
                navigation.navigate('Sign In');//skip mail confirmation - phase 2 
            }

        }
        else {
            alert("הסיסמאות שהזנת אינן תואמות, נסה שנית");
        }
    }

    const onClickTermsOfUse = () => {
        //תנאי שימוש
        console.warn('Terms of use redirect')
    }

    const onExistingAcount = () => {
        navigation.navigate('Sign In');
    }


    return (
        <ScrollView>
            <Image source={image} style={styles.pic} />
            <View style={styles.root}>
                <Text style={styles.text}>רישום משתמש חדש</Text>
                <TextInput
                    value={league_id}
                    onChangeText={setleagueId}
                    placeholder={'מצטרף לליגה קיימת? הזן מספר ליגה'}
                    style={styles.container}
                />
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
                <Text></Text>
                <Text></Text>
            </View>
        </ScrollView>
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
        height: 410,
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