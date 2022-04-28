import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam.jsx';
<<<<<<< HEAD
import Profile from '../Screens/Profile.jsx';
=======
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
import NewGame from '../Screens/shchunaComps/NewGame.jsx';


const topBar = {
  headerShown: false,
};

<<<<<<< HEAD
function CreateNewGame() {
=======
export function CreateNewGame() {
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <NewGame />
    </View>
  );
}

<<<<<<< HEAD
function Tables() {
=======
export function Tables() {
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
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

<<<<<<< HEAD
function MainMenu(props) {
  //const username = props.username;
=======
export function MainMenu(props) {
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home nickname={props.nickname}/>
    </View>
  );
}


const Tab = createBottomTabNavigator();


<<<<<<< HEAD
export default function Bottom(props) {
  //const userDetails = useContext(UserDataContext)
  
=======
export default function Bottom() {  
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={topBar}>
        <Tab.Screen name="תפריט ראשי"
          component={MainMenu}
<<<<<<< HEAD
          initialParams={{ props }}
=======
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="home" size={size} color={color} />)
          }} />
        <Tab.Screen name="טבלת הליגה"
          component={Tables}
<<<<<<< HEAD
          initialParams={{}}
=======
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="Trophy" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="ניהול קבוצה"
          component={TeamManagement}
<<<<<<< HEAD
          initialParams={{}}
=======
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="team" size={size} color={color} />)
          }}
        />
        <Tab.Screen name="משחק חדש"
          component={CreateNewGame}
<<<<<<< HEAD
          initialParams={{}}
=======
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
          options={{
            tabBarIcon: ({ focused, color, size }) => (<AntDesign name="pluscircleo" size={size} color={color} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



