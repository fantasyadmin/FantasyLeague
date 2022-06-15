import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/HomeManager';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable';
import Profile from '../Screens/Profile';
import NewGame from '../Screens/shchunaComps/NewGame';
import ManageTeam from '../Screens/ManageTeam/ManageTeam';
import ManagePlayers from '../Screens/shchunaComps/ManagePlayers';
import ExistingMatch from '../Screens/shchunaComps/ExistingMatch';
import StopWatch from '../Screens/shchunaComps/matchComps/Timer/StopWatch';
import ContactsList from '../Screens/FantasyLeagueComps/ManageLeagueComps/Contacts';
import PlaceResults from '../Screens/shchunaComps/matchComps/PlaceResults';
import ApproveResults from '../Screens/FantasyLeagueComps/ManageLeagueComps/approveResults';

const Stack = createNativeStackNavigator();

const HomeNavManager = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="New Game" component={NewGame} />
                <Stack.Screen name="League Table" component={LeagueTable} />
                <Stack.Screen name="Manage Team" component={ManageTeam} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Manage Players" component={ManagePlayers} />
                <Stack.Screen name="StopWatch" component={StopWatch} />
                <Stack.Screen name="Place Results" component={PlaceResults} />
                <Stack.Screen name="Existing Match" component={ExistingMatch} />
                <Stack.Screen name="Contacts List" component={ContactsList} />
                <Stack.Screen name="Approve Results" component={ApproveResults} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default HomeNavManager;


