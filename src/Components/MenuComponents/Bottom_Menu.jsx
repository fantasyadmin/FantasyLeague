import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamManageNav from '../Navigation/TeamManageNav.jsx';
import MatchNav from '../Navigation/MatchNav.jsx';
import HomeNavManager from '../Navigation/HomeNavManager.jsx';

const Stack = createNativeStackNavigator();
const topBar = {
  headerShown: false,
};

function Tables() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LeagueTable />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Bottom() {

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={topBar}>
        <Tab.Screen name="תפריט ראשי"
          component={HomeNavManager}   
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
          component={TeamManageNav} //independent navigator
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="team" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="משחק חדש"
          component={MatchNav}
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}



