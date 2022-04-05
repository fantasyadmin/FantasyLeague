import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TeamInTable(props) {
    const onClickTeam = (teamNo) => {
        
        //return team members / show team members
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}><FontAwesome name="soccer-ball-o" size={30} color="#100" />{props.logo}</Text>
            <Text style={styles.text2}>{props.points} pt.</Text>
            <Text style={styles.text}> {props.nickname}</Text>
            <Text style={styles.text}>         {props.place}</Text>
            <TouchableOpacity onPress={onClickTeam(props.key)}>{props.icon}</TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#4472c4',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        color: 'white',
        width: 80,
        fontSize: 20,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        fontWeight: 'bold',
        color: 'white',
        width: 80,
        fontSize: 20,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
})