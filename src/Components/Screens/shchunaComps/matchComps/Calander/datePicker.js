import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import { MatchInfoContext } from '../../../../Context/UserContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons as Icon } from "@expo/vector-icons";

const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export const PickDate = (props) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [matchDate1, setMatchDate1] = useState('');

    const onChangeDate = (event, selectedDate) => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        let monthName = monthsArr[month - 1];
        const day = selectedDate.getDate();
        setShow(false);
        setDate(selectedDate);
        setMatchDate1(`${day} ${monthName} ${year}`);
        let choice1 = `${day} ${monthName} ${year}`;
        console.log(matchDate1);
        props.uplift(choice1);
        console.log("date data = ", `${day} ${monthName} ${year}`);
    };



    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <View style={styles1.container}>
            <View>
                <Text style={styles.text}>              {matchDate1}               </Text>
            </View>
            <View >
                <Icon
                    name="calendar-outline"
                    style={{ fontSize: 30, color: 'white' }}
                    onPress={showDatepicker}
                />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChangeDate}
                    minimumDate={new Date()}
                />
            )}
        </View>
    );
}



const styles1 = StyleSheet.create({
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});
