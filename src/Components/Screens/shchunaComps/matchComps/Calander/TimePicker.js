import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { UserDataContext } from '../../../../Context/UserContext';
import { Ionicons as Icon } from '@expo/vector-icons';


export const PickTime = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const { userData, setUserData } = useContext(UserDataContext);
    const [matchTime, setMatchTime] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
        let minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
        var timePicked =  hours + ':' + minutes;

        setMatchTime(timePicked);
        setUserData({match_time: matchTime})
    };




    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
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
                    value={date}
                    mode={mode}
                    dateFormat={false}
                    is24Hour={true}
                    display='default'
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