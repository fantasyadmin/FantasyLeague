import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MatchInfoContext } from '../../../../Context/UserContext';
import { Ionicons as Icon } from '@expo/vector-icons';


export const PickTime = () => {
    const [date1, setDate1] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const { matchData, setMatchData } = useContext(MatchInfoContext);
    const [matchTime, setMatchTime] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate //|| date1;
        setShow(Platform.OS === 'ios');
        setDate1(currentDate);

        let hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
        let minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
        setMatchTime(`${hours}:${minutes}`);
        setMatchData({match_time: `${hours}:${minutes}:00`})
        saveData(`${hours}:${minutes}:00`);
        console.log("data inserted = ", `${hours}:${minutes}:00`);
    };


    const saveData = (data) => {
        //setMatchTime(data);
        setMatchData({ match_time: data });
        console.log("date picked = ", matchData.match_date);
        console.log("time picked = ", matchData.match_time);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    const showTimepicker = () => {
        showMode('time');
    };

    const tellPapa = ({ setMatchTime }) => {
        console.log(matchTime);
        setMatchTime(matchTime)
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>                 {matchTime}                </Text>
            </View>
            <View>
                <Icon
                    name="time-outline"
                    style={{ fontSize: 30, color: 'white' }}
                    onPress={showTimepicker}
                />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date1}
                    mode={mode}
                    dateFormat={false}
                    is24Hour={true}
                    display='default'
                    tellPapa={tellPapa}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: 'grey',
        borderWidth: 1,
        marginLeft: 50,
        marginRight: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    datePickerStyle: {
        width: 250,
        marginTop: 0,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        //fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
});