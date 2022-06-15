import Navigation from './src/Components/Navigation/Navigation.jsx';
import {
  UserDatacontextProvider,
  LeagueInfoContextProvider,
  FantasyTeamInfoContextProvider,
  LeaguePlayersInfoContextProvider,
  MatchInfoContextProvider,
  LeagueTeamsInfoContextProvider
} from './src/Components/Context/UserContext';
import { ContactsForSMSProvider } from './src/Components/Context/ContactsContext.js';
// import GetContacts from './src/Components/Screens/FantasyLeagueComps/ManageLeagueComps/GetContacts.jsx';
// import BuyPlayers from '/src/Components/Screens/ManageTeam/BuyPlayers';
// import SellPlayers from './src/Components/Screens/ManageTeam/SellPlayers';
// import SmartRadar from './src/Components/Screens/SmartCalc/RadarBuildSmartCalc.jsx';
import MapComp from './src/Components/Screens/shchunaComps/matchComps/GoogleMapsAPI/map'
import ApproveResults from './src/Components/Screens/FantasyLeagueComps/ManageLeagueComps/approveResults.jsx';

export default function App() {
  return (
    // <SmartRadar />
    //<GetContacts />
    //<ApproveResults/>
    <UserDatacontextProvider>
      <LeagueInfoContextProvider>
        <FantasyTeamInfoContextProvider>
          <LeaguePlayersInfoContextProvider>
            <MatchInfoContextProvider>
              <LeagueTeamsInfoContextProvider>
                <ContactsForSMSProvider>
                  <Navigation />
                </ContactsForSMSProvider>
              </LeagueTeamsInfoContextProvider>
            </MatchInfoContextProvider>
          </LeaguePlayersInfoContextProvider>
        </FantasyTeamInfoContextProvider>
      </LeagueInfoContextProvider>
    </UserDatacontextProvider>
    //     //<StopWatch/>
    //     //<NewGame/>
    //     //<ColorPicking />
    //     //<LeagueTable/>
    //     //<TeamInTable/>
    //     //<WellcomeScreen />
    //     //<SignInScreen/>
    //     //<SignUpScreen />
    //     //<Bottom />
    //     //<MailConfirm/>
    //     //<forgotPassword/>
    //     //<ResetPassword/>
    //     //<Home />
    //     //<CreateLeague/>
    //     //<Navigation />
    //     //<Profile />
    //     //<ManageExistingGame />
    //     //<PickDate/>
    //     //<PickTime/>
    //     //<LeagueInfoContextProvider>
    //     //<FantasyTeamInfoContextProvider>
    //     //  <LeaguePlayersInfoContextProvider>
    //     //    <MatchInfoContextProvider>
    //     //      <LeagueTeamsInfoContextProvider>
    //     //        <Navigation />
    //     //      </LeagueTeamsInfoContextProvider>
    //     //    </MatchInfoContextProvider>
    //     //  </LeaguePlayersInfoContextProvider>
    //     //</FantasyTeamInfoContextProvider>
    //     //</LeagueInfoContextProvider>
    // <MapComp/>

  );
}


// רשימת מסכים לבדיקה

