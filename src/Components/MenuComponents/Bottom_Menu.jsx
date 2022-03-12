import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WellcomeScreen from '../Screens/WellcomeScreen.jsx';


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

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <WellcomeScreen />
    </View>
  );
}

function LeagueTable() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>League Table</Text>
    </View>
  );
}

function TeamManagement() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Team Management</Text>
    </View>
  );
}

function MainMenu() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Main Menu</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={topBar}>
        <Tab.Screen name="משחק חדש" component={HomeScreen} />
        <Tab.Screen name="טבלת הליגה" component={LeagueTable} />
        <Tab.Screen name="ניהול קבוצה" component={TeamManagement} />
        <Tab.Screen name="תפריט ראשי" component={MainMenu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



