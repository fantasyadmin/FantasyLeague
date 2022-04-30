import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import ManageTeam from '../Screens/ManageTeam/ManageTeam.jsx';
import Profile from '../Screens/Profile.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';
import { UserDataContext } from '../Context/UserContext.js';
import { Route } from 'react-router-dom';

const topBar = {
  headerShown: false,
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

function MainMenu(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home />
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function Bottom() {
  const { userData, setUserData } = useContext(UserDataContext);

  return (
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={topBar}>
          <Tab.Screen name="תפריט ראשי"
            component={MainMenu}
            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="home" size={size} color={color} />)
            }} />
          <Tab.Screen name="טבלת הליגה"
            component={Tables}

            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="Trophy" size={size} color={color} />)
            }}
          />
          <Tab.Screen name="ניהול קבוצה"
            component={TeamManagement}
            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="team" size={size} color={color} />)
            }}
          />
          <Tab.Screen name="משחק חדש"
            component={CreateNewGame}
            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}



