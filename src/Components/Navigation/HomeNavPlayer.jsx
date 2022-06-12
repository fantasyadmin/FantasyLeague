import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable';
import Profile from '../Screens/Profile';
import NewGame from '../Screens/shchunaComps/NewGame';
import ManageTeam from '../Screens/ManageTeam/ManageTeam';
import ManagePlayers from '../Screens/shchunaComps/ManagePlayers';
import ExistingMatch from '../Screens/shchunaComps/ExistingMatch';
import StopWatch from '../Screens/shchunaComps/matchComps/Timer/StopWatch';
import ContactsList from '../Screens/FantasyLeagueComps/ManageLeagueComps/Contacts';
import PlaceResults from '../Screens/shchunaComps/matchComps/PlaceResults';
import HomePlayer from '../Screens/HomePlayer';


const Stack = createNativeStackNavigator();

const HomeNavPlayer = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home Player" component={HomePlayer} />
                <Stack.Screen name="New Game" component={NewGame} />
                <Stack.Screen name="League Table" component={LeagueTable} />
                <Stack.Screen name="Manage Team" component={ManageTeam} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Manage Players" component={ManagePlayers} />
                <Stack.Screen name="StopWatch" component={StopWatch} />
                <Stack.Screen name="PlaceResults" component={PlaceResults} />
                <Stack.Screen name="Existing Match" component={ExistingMatch} />
                <Stack.Screen name="Contacts List" component={ContactsList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default HomeNavPlayer;


