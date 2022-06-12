import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from '../CustomComps/CustomButton';
import TopProfileBar from '../MenuComponents/TopProfileBar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    const onPressChat = () => {
        console.warn('ניווט לצאט')
    }

    const onPressConfirmResults = () => {
        console.warn('אישור תוצאות משחק')
    }

    return (
        <View style={styles.container}>
            <TopProfileBar />
            <CustomButton text="Fantasy ליגת" onPress={() => navigation.navigate('League Table')} />
            <CustomButton text="משחק הצ'כונה הבא" onPress={() => navigation.navigate('Existing Match')} />
            <CustomButton text="צ'אט הליגה" onPress={onPressChat} />

            <Text></Text>
            <Text></Text>

            <Text style={styles.text}>ניהול ליגה</Text>
            <CustomButton text="הזמן שחקן חדש" onPress={() => navigation.navigate('Contacts List')} />
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
