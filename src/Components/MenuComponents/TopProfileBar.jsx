import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import React, { useContext } from 'react';
import { profilePic, image } from '../../../assets/exports';
import CustomButton from '../CustomComps/CustomButton';
import { UserDataContext } from '../Context/UserContext';
import { useNavigation } from '@react-navigation/native';
import Profile from '../Screens/Profile';


export default function TopProfileBar(props) {
    const { userData } = useContext(UserDataContext);
    const navigation = useNavigation();

    const onProfileClick = () => {
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.root}>
            <TouchableHighlight onPress={onProfileClick}>
                <Image source={profilePic} style={styles.pic} />
            </TouchableHighlight>

            <View>
                <Text style={styles.text}>           {userData.nickname}</Text>
                <Text></Text>
                <Text style={styles.text}>    שם הליגה:    {userData.league_name}</Text>
                <Text style={styles.text}>    מספר משחקים:   {userData.games_played}</Text>
                <Text style={styles.text}>    ציון שחקן:    {userData.player_score}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#4472c4',
        height: '25%',
        marginTop: 10,
        borderRadius: 100,
    },
    pic: {
        width: 100,
        borderRadius: 100,
        height: 100,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
})