import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import ManageTeam from '../Screens/ManageTeam/ManageTeam.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';
import { UserDataContext } from '../Context/UserContext.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from '../Navigation/HomeNavManager.jsx';
import TeamManageNav from '../Navigation/TeamManageNav.jsx';
import HomeNavPlayer from '../Navigation/HomeNavPlayer.jsx';
import HomeNavManager from '../Navigation/HomeNavManager.jsx';
import MatchNav from '../Navigation/MatchNav.jsx';

const Stack = createNativeStackNavigator();

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


function isManagerMenu(manager) {
  if (manager) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {HomeNavManager}
      </View>
    );
  }
  else {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {HomeNavPlayer}
      </View>
    );
  }

}


const Tab = createBottomTabNavigator();


export default function Bottom() {
  const { userData, setUserData } = useContext(UserDataContext);


  const managerMenue = () => {
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
            component={CreateNewGame}
            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }


  const playerMenue = () => {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={topBar}>
          <Tab.Screen name="תפריט ראשי"
            component={HomeNavPlayer}
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
            component={CreateNewGame}
            options={{
              tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

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



