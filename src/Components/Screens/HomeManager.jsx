import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import CustomButton from '../CustomComps/CustomButton';
import TopProfileBar from '../MenuComponents/TopProfileBar';
import { useNavigation } from '@react-navigation/native';
import { LeagueInfoContext } from '../Context/UserContext';
import React, { useState, useContext } from "react";



const Home = () => {
    const { leagueData, setLeagueData } = useContext(LeagueInfoContext);
    const navigation = useNavigation();

    const onPressChat = () => {
        try {
            Linking.openURL(leagueData.league_rules);
        } catch (error) {
            alert("לא קיימת קבוצה")
        }
    }

    return (
        <View style={styles.container}>
            <TopProfileBar />
            <CustomButton text="Fantasy ליגת" onPress={() => navigation.navigate('League Table')} />
            <CustomButton text="משחק הצ'כונה הבא" onPress={() => navigation.navigate('Existing Match')} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />
            <CustomButton text="הזן תוצאות משחק" onPress={() => navigation.navigate('Place Results')} />


            <Text></Text>
            <Text></Text>

            <Text style={styles.text}>ניהול ליגה</Text>
            <CustomButton text="הזמן שחקן חדש" onPress={() => navigation.navigate('Contacts List')} />
            <CustomButton text="נהל שחקנים" onPress={() => navigation.navigate('Manage Players')} />
            <CustomButton text="אשר תוצאות משחקים" onPress={() => navigation.navigate('Approve Results')} />
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
