import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import MailConfirm from '../Screens/ConfirnEmail';
import ForgotPassword from '../Screens/ForgotPassword';
import ResetPassword from '../Screens/ResetPassword';
import WellcomeScreen from '../Screens/WellcomeScreen';
import Bottom from '../MenuComponents/Bottom_Menu';
import Home from '../Screens/Home';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/TeamInTable';
import Profile from '../Screens/Profile';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam';
import NewGame from '../Screens/shchunaComps/NewGame';
import CreateLeague from '../Screens/FantasyLeagueComps/CreateLeague';
import { UserDataContext } from '../Context/UserContext';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="Wellcome" component={WellcomeScreen} />
                    <Stack.Screen name="Sign In" component={SignInScreen} />
                    <Stack.Screen name="Sign Up" component={SignUpScreen} />
                    <Stack.Screen name="Mail Confirmation" component={MailConfirm} />
                    <Stack.Screen name="Forgot Password" component={ForgotPassword} />
                    <Stack.Screen name="Reset Password" component={ResetPassword} />
                    <Stack.Screen name="Create League" component={CreateLeague} />
                    <Stack.Screen name="Bottom" component={Bottom} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="New Game" component={NewGame} />
                    <Stack.Screen name="League Table" component={LeagueTable} />
                    <Stack.Screen name="Manage Team" component={ManageTeam} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        
    )
}

export default Navigation


