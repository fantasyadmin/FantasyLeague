import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons as Icon } from '@expo/vector-icons';


export const PickTime = (props) => {
    const [date1, setDate1] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [matchTime, setMatchTime] = useState('');


    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate //|| date1;
        setShow(Platform.OS === 'ios');
        setDate1(currentDate);
        let hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
        let minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
        setMatchTime(`${hours}:${minutes}`);
        let choice = `${hours}:${minutes}`
        console.log(matchTime);
        props.uplift(choice);
        console.log("data inserted = ", `${hours}:${minutes}:00`);
    };



    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    const showTimepicker = () => {
        showMode('time');
    };


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
                    onChange={onChangeTime}
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