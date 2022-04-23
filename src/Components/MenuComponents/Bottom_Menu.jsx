import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';


const topBar = {
  headerShown: false,
};

export function CreateNewGame() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <NewGame />
    </View>
  );
}

export function Tables() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LeagueTable userData={''} />
    </View>
  );
}

export function TeamManagement() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ManageTeam userData={''} />
    </View>
  );
}

export function MainMenu(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home nickname={props.nickname}/>
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default function Bottom() {  
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



