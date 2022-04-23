//import { StyleSheet, Text, View, Image } from 'react-native';
import React, { createContext } from 'react';

export const DataContext = createContext({
    data: '',
    setData: () => { }
});

//export default function context(props) {
    //return (
        //<DataContext.Provider value={{ props }}>
          //  {children}
        //</DataContext.Provider>
    //)
//}

