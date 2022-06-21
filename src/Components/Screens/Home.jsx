import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../CustomComps/CustomButton';
import TopProfileBar from '../MenuComponents/TopProfileBar';
import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import MatchNav from '../Navigation/MatchNav';
import ExistingMatchNav from '../Navigation/ExistingMatchNav';
import * as SMS from 'expo-sms';
import {
    LeagueInfoContext
} from '../../../Context/UserContext';

const Home = () => {
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);

    const navigation = useNavigation();

    const onPressChat = () => {
        console.warn('ניווט לצאט')
    }

    const onPressConfirmResults = () => {
        console.warn('אישור תוצאות משחק')
    }

    async function sendMessage() {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await SMS.sendSMSAsync(
                [send],
                'אתה לא מאמין איזו אפליקציה!' +
                '\n הצטרף לליגת הפנטזי עם כל החברים' +
                ' \n פשוט הירשם לליגה מספר    ' + [leagueData.league_id]
                // {
                //     attachments: {
                //         uri: 'path/myfile.png',
                //         mimeType: 'image/png',
                //         filename: 'myfile.png',
                //     },
                // }
            );
            console.log(result);
        } else {
            console.log("check sms function");
        }
    }


    return (
        <View style={styles.container}>
            <TopProfileBar />
            <CustomButton text="Fantasy ליגת" onPress={() => navigation.navigate('League Table')} />
            <CustomButton text="משחק הצ'כונה הבא" onPress={ExistingMatchNav} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />

            <Text></Text>
            <Text></Text>

            <Text style={styles.text}>ניהול ליגה</Text>
            <CustomButton text="הזמן שחקן חדש" onPress={() => sendMessage} />
            <CustomButton text="נהל שחקנים" onPress={() => navigation.navigate('Manage Players')} />
            <CustomButton text="אשר תוצאות משחק" onPress={onPressConfirmResults} />
        </View>
    )
}

export default Home
{/* <CustomButton text="משחק הצ'כונה הבא" onPress={() => navigation.navigate('Existing Match')} /> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        backgroundColor: '#4472c4',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
});
