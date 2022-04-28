import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { image } from '../../../assets/exports';
import { useState } from 'react/cjs/react.development';
import CustomButton from '../CustomComps/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';




export default function ForgotPassword() {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();


    const onSendPressed = () => {
        console.warn('שליחת סיסמה למייל')
        navigation.navigate('Mail Confirmation');
    }

    const onSignInPress = () => {
        console.warn('חזרה לרישום')
        navigation.navigate('Sign Up');
    }


    return (
        <ScrollView>
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
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
                <Text>     </Text>
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
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
})