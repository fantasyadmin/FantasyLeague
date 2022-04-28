import React, { useState } from 'react';
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
  const [user_id, setUser_id] = useState(props.user_id)
  const [nickname, setNickname] = useState(props.nickname)
  const [user, setUser] = useState(props.user)
  const [player, setPlayer] = useState(props.player)
  const [league, setLeague] = useState(props.league)
  const [fantasyTeam, setFantasyTeam] = useState(props.fantasyTeam)
  const [leaguePlayers, setLeaguePlayers] = useState(props.leaguePlayers)

  const props2 = JSON.stringify(props)

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
    <DataContext.Provider value={{ user, player, league, fantasyTeam, leaguePlayers }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={topBar}>
          {() => setUserid}
          {console.log("navigation props =========== ", props2)};
          {console.log("context nickname =========== ", props2[params.result.nickname])};
          {console.log("context user id =========== ", props2)};
          <Tab.Screen name="תפריט ראשי"
            component={MainMenu}
            initialParams={{}}
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



    </DataContext.Provider>

  );
}



