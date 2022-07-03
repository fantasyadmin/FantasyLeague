import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/HomeManager";
import LeagueTable from "../Screens/FantasyLeagueComps/TableComps/LeagueTable";
import Profile from "../Screens/Profile";
import NewGame from "../Screens/shchunaComps/NewGame";
import ManageTeam from "../Screens/ManageTeam/ManageTeam";
import ManagePlayers from "../Screens/shchunaComps/ManagePlayers";
import ExistingMatch from "../Screens/shchunaComps/ExistingMatch";
import ApproveResults from "../Screens/FantasyLeagueComps/ManageLeagueComps/ApproveResults";
import StopWatch from "../Screens/shchunaComps/matchComps/Timer/StopWatch";
import ContactsList from "../Screens/FantasyLeagueComps/ManageLeagueComps/Contacts";
import PlaceResults from "../Screens/shchunaComps/matchComps/PlaceResults";
import { UserDataContext } from "../Context/UserContext";
import GameMapComp from "../Screens/shchunaComps/matchComps/GoogleMapsAPI/GameLocMap";
import UploadPic from "../FireBase/Upload";
import GetPic from "../FireBase/GetImage";
import EditLeague from "../Screens/FantasyLeagueComps/ManageLeagueComps/EditLeague";
import EditLeagueDetails from "../Screens/FantasyLeagueComps/ManageLeagueComps/EditLeagueDetails";
import NominateManager from "../Screens/shchunaComps/NominateManager";

const Stack = createNativeStackNavigator();

const HomeNavManager = () => {
  const { userData } = useContext(UserDataContext);

  const managerButtons = (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="New Game" component={NewGame} />
      <Stack.Screen name="League Table" component={LeagueTable} />
      <Stack.Screen name="Manage Team" component={ManageTeam} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Manage Players" component={ManagePlayers} />
      <Stack.Screen name="StopWatch" component={StopWatch} />
      <Stack.Screen name="Place Results" component={PlaceResults} />
      <Stack.Screen name="Existing Match" component={ExistingMatch} />
      <Stack.Screen name="Contacts List" component={ContactsList} />
      <Stack.Screen name="Approve Results" component={ApproveResults} />
      <Stack.Screen name="Game Location" component={GameMapComp} />
      <Stack.Screen name="Upload Picture" component={UploadPic} />
      <Stack.Screen name="Get Picture" component={GetPic} />
      <Stack.Screen name="Edit League" component={EditLeague} />
      <Stack.Screen name="Edit League Details" component={EditLeagueDetails} />
      <Stack.Screen name="Nominate Manager" component={NominateManager} />
    </Stack.Navigator>
  );

  const playerButtons = (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="New Game" component={NewGame} />
      <Stack.Screen name="League Table" component={LeagueTable} />
      <Stack.Screen name="Manage Team" component={ManageTeam} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StopWatch" component={StopWatch} />
      <Stack.Screen name="Place Results" component={PlaceResults} />
      <Stack.Screen name="Existing Match" component={ExistingMatch} />
      <Stack.Screen name="Contacts List" component={ContactsList} />
      <Stack.Screen name="Game Location" component={GameMapComp} />
      <Stack.Screen name="Upload Picture" component={UploadPic} />
      <Stack.Screen name="Get Picture" component={GetPic} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer independent={true}>
      {userData.league_manager ? managerButtons : playerButtons}
    </NavigationContainer>
  );
};

export default HomeNavManager;
