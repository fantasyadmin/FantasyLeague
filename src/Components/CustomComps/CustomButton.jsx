import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const CustomButton = ({ onPress, text, color, txt }) => {
    const [buttonColor, setButtonColor] = useState('#C9DFEC')//#1b91f3 #F5DEB3
    const [txtColor, setTxtColor] = useState('#2554C7')//#1b91f3 #F5DEB3

    const animated = new Animated.Value(1);


    useEffect(() => {
        {
            color ? (
                setButtonColor(color)
            ) : (
                null
            )
        }
        {
            txt ? (
                setTxtColor(txt)
            ) : (
                null
            )
        }
        return () => {

        }
    }, [])


    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.3,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={fadeIn}
            onPressOut={fadeOut}
        >
            <Animated.View
                style={{
                    opacity: animated,
                    backgroundColor: buttonColor,
                    width: 170,
                    padding: 15,
                    marginVertical: 5,
                    alignItems: 'center',
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.41,
                    shadowRadius: 9.11,
                    elevation: 8,
                }} >
                <Text style={{
                    fontWeight: 'bold',
                    color: txtColor,
                }}>
                    {text}
                </Text>
            </Animated.View>
        </Pressable>
    )
}

export default CustomButton