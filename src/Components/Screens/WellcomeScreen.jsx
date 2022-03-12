import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { image } from '../../../assets/exports';
import CustomButton from '../CustomComps/CustomButton';


const onSignInPress = () => { 
    console.warn('כניסת משתמש קיים')
}

const onSignUpPress = () => { 
    console.warn('משתמש חדש - מסך רישום')
}

const WellcomeScreen = () => {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View style={styles.Button}>
                    <CustomButton text="משתמש חדש" onPress={onSignUpPress} />
                    <Text>      </Text>
                    <CustomButton text="משתמש קיים" onPress={onSignInPress} />
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 500,
        width: 200
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover'
    },
});