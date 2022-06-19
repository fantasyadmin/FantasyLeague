import Navigation from "./src/Components/Navigation/Navigation.jsx";
import {
  UserDatacontextProvider,
  LeagueInfoContextProvider,
  FantasyTeamInfoContextProvider,
  LeaguePlayersInfoContextProvider,
  MatchInfoContextProvider,
  LeagueTeamsInfoContextProvider,
} from "./src/Components/Context/UserContext";
import { ContactsForSMSProvider } from "./src/Components/Context/ContactsContext.js";
import { Modal } from "react-native-paper";
import ModalResult from "./src/Components/CustomComps/Modal.jsx";
import { TempUserDataContext, TempUserDataContextProvider } from "./src/Components/Context/TempUserContext.js";

export default function App() {
  return (
    // <SmartRadar />
    //<GetContacts />
    //<ApproveResults/>
    //<GameMapComp />
    <TempUserDataContextProvider>
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
    </TempUserDataContextProvider>

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
