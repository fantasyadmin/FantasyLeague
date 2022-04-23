import React, { createContext, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Home from '../Screens/Home.jsx';
import LeagueTable from '../Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import ManageTeam from '../Screens/FantasyLeagueComps/ManageTeam.jsx';
import Profile from '../Screens/Profile.jsx';
import NewGame from '../Screens/shchunaComps/NewGame.jsx';
import { DataContext } from '../Context/context.jsx';
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


export default function Bottom({ props }) {
  const [user_id, setUser_id] = useState('')
  const [nickname, setNickname] = useState('')
  const [user, setUser] = useState('')
  const [player, setPlayer] = useState('')
  const [league, setLeague] = useState('')
  const [fantasyTeam, setFantasyTeam] = useState('')
  const [leaguePlayers, setLeaguePlayers] = useState('')

  ///////////////////////////////////
  const [data, setData] = useState(props["route"]["params"]["result"]);

  const dataUpdate = () => {
    const { data, setData } = useContext(DataContext);
  };

  //////////////////////////////////

  const setUserid = () => {
    setUser_id(user_id = JSON.stringify(props.user_id))
  }

  const updateUser = () => {
    setUser(userData);
  }

  const updatePlayer = (userData) => {
    setPlayer(userData);
  }

  const updateLeague = (userData) => {
    setLeague(userData);
  }

  const updateFantasyTeam = (userData) => {
    setFantasyTeam(userData);
  }
  const updateLeaguePlayers = (userData) => {
    setLeaguePlayers(userData);
  }


  return (
    <DataContext.Provider value={params.props}>
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
    </DataContext.Provider>

  );
}



