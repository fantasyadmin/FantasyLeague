import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/HomeManager';
import MapComp from '../Screens/shchunaComps/matchComps/GoogleMapsAPI/map';
import NewGame from '../Screens/shchunaComps/NewGame';

const Stack = createNativeStackNavigator();

const MatchNav = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="New Game" component={NewGame} />
                <Stack.Screen name="Map" component={MapComp} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MatchNav;


