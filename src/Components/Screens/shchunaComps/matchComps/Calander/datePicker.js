//import React, { useState, useContext } from 'react';
//import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import DatePicker from 'react-native-modern-datepicker';
//import DateTimePicker from '@react-native-community/datetimepicker';

import { UserDataContext } from '../../../../Context/UserContext';
import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}





//const PickDate = () => {
//    const { userData, setUserData } = useContext(UserDataContext);
//    const [date, setDate] = useState(new Date());
//
//
//    return (
//        <View style={styles.container}>
//            <DatePicker
//                style={styles.datePickerStyle}
//                date={date} //initial date from state
//                mode="date" //The enum of date, datetime and time
//                placeholder="select date"
//                format="DD-MM-YYYY"
//                minDate={date}
//                //maxDate={date}
//                confirmBtnText="Confirm"
//                cancelBtnText="Cancel"
//                customStyles={{
//                    dateIcon: {
 //                       display: 'none',
  //                      position: 'absolute',
//                        left: 0,
//                        top: 4,
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

//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//    },
//    title: {
//        textAlign: 'center',
//        fontSize: 30,
//        fontWeight: 'bold',
//    },
//    datePickerStyle: {
//        width: 250,
//        marginTop: 0,
//    },
//});




