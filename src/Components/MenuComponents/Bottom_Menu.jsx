import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/LeagueTable.jsx';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam.jsx';
import Profile from '../Screens/Profile.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';
import { useState } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


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
      <LeagueTable userData={''} />
    </View>
  );
}

function TeamManagement() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ManageTeam userData={''} />
    </View>
  );
}

function MainMenu(props) {
  const username = props.username;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home username={username} />
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function Bottom(props) {
  const [username, setUsername] = useState(props.username)
  
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={topBar}>
        <Tab.Screen name="תפריט ראשי"
          component={MainMenu}
          initialParams={{ username }}
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="home" size={size} color={color} />)
          }} />
        <Tab.Screen name="טבלת הליגה"
          component={Tables}
          initialParams={{}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="Trophy" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="ניהול קבוצה"
          component={TeamManagement}
          initialParams={{}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="team" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="משחק חדש"
          component={CreateNewGame}
          initialParams={{}}
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



