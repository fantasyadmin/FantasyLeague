import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../CustomComps/CustomButton';
import LeagueTable from './FantasyLeagueComps/LeagueTable';
import NewGame from './shchunaComps/NewGame';


const Home = () => {
    
    const onPressFantasy = () => {
        console.warn('ניווט לטבלת הפנטזי')
    }

    const onPressSchoona = () => {
        console.warn('ניווט למשחק קיים / משחק חדש')
    }

    const onPressChat = () => {
        console.warn('ניווט לצאט')
    }

    const onPressInvitePlayer = () => {
        console.warn('הזמנת שחקן חדש')
    }

    const onPressManagePlayers = () => {
        console.warn('ניהול שחקנים בליגה')
    }

    const onPressConfirmResults = () => {
        console.warn('אישור תוצאות משחק')
    }

    return (
        <View style={styles.container}>
            <Text>שלום שחקן=======</Text>
            <Text></Text>
            <CustomButton text="Fantasy ליגת" onPress={onPressFantasy} />
            <CustomButton text="שחק צ'כונה" onPress={onPressSchoona} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />
            <Text></Text>
            <Text></Text>
            <Text>ניהול ליגה</Text>
            <Text></Text>
            <CustomButton text="הזמן שחקן חדש" onPress={onPressInvitePlayer} />
            <CustomButton text="נהל שחקנים" onPress={onPressManagePlayers} />
            <CustomButton text="אשר תוצאות משחק" onPress={onPressConfirmResults} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#4472c4',
    },
    Button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 500,
        width: 200
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover'
    },
});
