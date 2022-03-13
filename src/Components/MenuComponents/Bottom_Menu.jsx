import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/LeagueTable.jsx';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam.jsx';
import Profile from '../Screens/Profile.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';


const topBar = {
  headerStyle: {
    backgroundColor: '#4472c4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center'
};

function CreateNewGame() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <NewGame />
    </View>
  );
}

function Tables() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LeagueTable />
    </View>
  );
}

function TeamManagement() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ManageTeam />
    </View>
  );
}

function MainMenu() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home/>
    </View>
  );
}


const Tab = createBottomTabNavigator();
export default function Bottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={topBar}>
        <Tab.Screen name="תפריט ראשי" component={MainMenu} />
        <Tab.Screen name="טבלת הליגה" component={Tables} />
        <Tab.Screen name="ניהול קבוצה" component={TeamManagement} />
        <Tab.Screen name="משחק חדש" component={CreateNewGame} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



