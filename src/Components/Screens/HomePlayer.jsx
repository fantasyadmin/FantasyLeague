import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../CustomComps/CustomButton';
import TopProfileBar from '../MenuComponents/TopProfileBar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const HomePlayer = () => {
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
            <CustomButton text="משחק הצ'כונה הבא" onPress={() => navigation.navigate('Existing Match')} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />
            <CustomButton text="הזמן שחקן חדש" onPress={() => navigation.navigate('Contacts List')} />
            <CustomButton text="הזן תוצאות משחק" onPress={() => navigation.navigate('Place Results')} />
        </View>
    )
}

export default HomePlayer

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
