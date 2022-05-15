import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import { UserDataContext } from '../../../../Context/UserContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons as Icon } from "@expo/vector-icons";



export const PickDate = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [matchDate, setMatchDate] = useState('');
    const { userData, setUserData } = useContext(UserDataContext);

    const onChange = (event, selectedDate) => {

        const year = selectedDate.getFullYear();
        const  month = selectedDate.getMonth()+1; 
        const  day= selectedDate.getDate();

        const currentDate = `${day}-${month}-${year}`;
        setShow(false);
        
        setDate(selectedDate);
        setMatchDate(`${day}-${month}-${year}`);
        setUserData({ match_date: matchDate })
        console.log(userData.match_date);
        console.log(matchDate);
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
                <Text style={styles.text}>              {matchDate}               </Text>
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
                    //is24Hour={true}
                    onChange={onChange}
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














//const PickDate = () => {
// const { userData, setUserData } = useContext(UserDataContext);
//   const [date, setDate] = useState(new Date());


//    return (
//      <View style={styles.container}>
//        <DatePicker
//          style={styles.datePickerStyle}
//        date={date} //initial date from state
//      mode="date" //The enum of date, datetime and time
//    placeholder="select date"
//  format="DD-MM-YYYY"
//minDate={date}
//maxDate={date}
//  confirmBtnText="Confirm"
//    cancelBtnText="Cancel"
//      customStyles={{
//            dateIcon: {
//                  display: 'none',
//                    position: 'absolute',
//                     left: 0,
//</View>                     top: 4,
//                        marginLeft: 0,
//                    },
//                    dateInput: {
//                        marginLeft: 36,
//                    },
//                }}
//                onDateChange={(date) => {
//                    setUserData({ match_date: date })
//                }}
//            />
//        </View>
//    );
//};

//export default PickDate;

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
