import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable';
import Profile from '../Screens/Profile';
import NewGame from '../Screens/shchunaComps/NewGame';
import ManageTeam from '../Screens/ManageTeam/ManageTeam';
import ManagePlayers from '../Screens/shchunaComps/ManagePlayers';
import BuyPlayers from '../Screens/ManageTeam/BuyPlayers';
import SellPlayers from '../Screens/ManageTeam/SellPlayers';
import PlayerData from '../Screens/FantasyLeagueComps/PlayerData';
import SmartCalc from '../Screens/SmartCalc/SmartCalc'

const Stack = createNativeStackNavigator();

const TeamManageNav = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Manage Team" component={ManageTeam} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="New Game" component={NewGame} />
                <Stack.Screen name="League Table" component={LeagueTable} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Manage Players" component={ManagePlayers} />
                <Stack.Screen name="Buy Players" component={BuyPlayers} />
                <Stack.Screen name="Sell Players" component={SellPlayers} />
                <Stack.Screen name="Player Profile" component={PlayerData} />
                <Stack.Screen name="SmartCalc" component={SmartCalc} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TeamManageNav;


