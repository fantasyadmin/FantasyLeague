import { Text, View, Button, StyleSheet, ImageBackground} from 'react-native'
import React, { Component } from 'react'

const image = { uri: "http://proj.ruppin.ac.il/bgroup89/Fantasy_league_proj/%D7%9C%D7%95%D7%92%D7%95.PNG" };

const WellcomeScreen = () => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.container}></Text>
                <View style={styles.Button}>
                    <Button title='new user' onPress={''}></Button>
                    <Text>                                  </Text>
                    <Button title='existing user' onPress={''}></Button>
                </View>
            </View >
        </ImageBackground>
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
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover'
      },
});