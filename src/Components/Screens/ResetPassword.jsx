import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';


export default function ResetPassword() {
    const [mail, setMail] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        const params = JSON.stringify({ 'email': mail })
        try {
            fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/ForgotPassword', {
              method: "POST",
              headers: new Headers({
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json; charset=UTF-8",
              }),
              body: params
            })
              .then(res => {
                console.log('res=', res);
                return res
              })
              .then(
                (result) => {
                  console.log("results are: ", result);
                })
          }
          catch (err) {
            console.log(err);
          }
          alert("סיסמתך החדשה נשלחה למייל שהזנת")
        navigation.navigate('Sign In');
    }

    const onSignInPress = () => {
        console.warn('חזרה לרישום')
        navigation.navigate('Sign Up');
    }

    return (
        <View style={styles.root}>
            <Image source={image} style={styles.pic} />
            <Text style={styles.text}>איפוס סיסמה</Text>
            <TextInput
                value={mail}
                onChangeText={setMail}
                placeholder={'מייל משתמש'}
                style={styles.container}
            />
            <CustomButton text="אישור" onPress={onSubmitPressed} />
            <Text>            </Text>
            <CustomButton text="רישום שחקן חדש" onPress={onSignInPress} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '70%',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        borderColor: "grey",
    },
    root: {
        width: '100%',
        height: '100%',
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
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
      },
})