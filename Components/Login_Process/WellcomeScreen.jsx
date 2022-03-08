import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const WellcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.container}></Text>
            <View style={styles.Button}>
                <Button title='new user' onPress={''}></Button>
                <Text>                                  </Text>
                <Button title='existing user' onPress={''}></Button>
            </View>
        </View >
    );
}

export default WellcomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 30,
    },
    Button: {
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 50,
    },
});