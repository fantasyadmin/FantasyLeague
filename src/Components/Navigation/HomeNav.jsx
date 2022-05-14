import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/TeamInTable';
import Profile from '../Screens/Profile';
import NewGame from '../Screens/shchunaComps/NewGame';
import ManageTeam from '../Screens/ManageTeam/ManageTeam';
import ManagePlayers from '../Screens/shchunaComps/ManagePlayers';
import BuyPlayers from '../Screens/ManageTeam/BuyPlayers';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="New Game" component={NewGame} />
                <Stack.Screen name="League Table" component={LeagueTable} />
                <Stack.Screen name="Manage Team" component={ManageTeam} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Manage Players" component={ManagePlayers} />
                <Stack.Screen name="Buy Players" component={BuyPlayers} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

//<Stack.Screen name="League Table" component={LeagueTable} />


export default HomeNav;

