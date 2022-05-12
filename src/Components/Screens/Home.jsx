import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../CustomComps/CustomButton';
import LeagueTable from './FantasyLeagueComps/TableComps/LeagueTable';
import NewGame from './shchunaComps/NewGame';
import TopProfileBar from '../MenuComponents/TopProfileBar';
import React, { useState, useContext } from 'react';
import { UserDataContext } from '../Context/UserContext';
import { CreateNewGame } from '../MenuComponents/Bottom_Menu';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../Navigation/Navigation';


const Home = () => {
    const { userData, setUserData } = useContext(UserDataContext);

    const navigation = useNavigation();

    const onPressChat = () => {
        console.warn('ניווט לצאט')
    }

    const onPressInvitePlayer = () => {
        console.warn('הזמנת שחקן חדש')
    }


    const onPressConfirmResults = () => {
        console.warn('אישור תוצאות משחק')
    }

    return (
        <View style={styles.container}>
            <TopProfileBar />
            <CustomButton text="Fantasy ליגת" onPress={() => navigation.navigate('League Table')} />
            <CustomButton text="שחק צ'כונה" onPress={() => navigation.navigate('New Game')} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />
            <Text></Text>
            <Text></Text>

            <Text style={styles.text}>ניהול ליגה</Text>
            <CustomButton text="הזמן שחקן חדש" onPress={onPressInvitePlayer} />
            <CustomButton text="נהל שחקנים" onPress={() => navigation.navigate('Manage Players')} />
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
        justifyContent: 'center',
        backgroundColor: '#4472c4',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
});
