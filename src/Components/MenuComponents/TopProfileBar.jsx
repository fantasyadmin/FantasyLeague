import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { profilePic, image } from '../../../assets/exports';
import CustomButton from '../CustomComps/CustomButton';
import { UserDataContext } from '../Context/UserContext';

export default function TopProfileBar(props) {
    const { userData } = useContext(UserDataContext);

    return (
        <View style={styles.root}>
            <Image source={profilePic} style={styles.pic} />
            <View>
                <Text style={styles.text}>    פרופיל משתמש   </Text>
                <Text></Text>
                <Text style={styles.text}>            {userData.nickname}</Text>
                <Text style={styles.text}>  מספר משחקים:  {props.gamesPlayed}</Text>
                <Text style={styles.text}>  ציון שחקן:    {props.playerScore}</Text>
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