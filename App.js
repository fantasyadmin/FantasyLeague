import React, { useState, useEffect } from 'react';
import Navigation from "./src/Components/Navigation/Navigation.jsx";
import {
  UserDatacontextProvider,
  LeagueInfoContextProvider,
  FantasyTeamInfoContextProvider,
  LeaguePlayersInfoContextProvider,
  MatchInfoContextProvider,
  LeagueTeamsInfoContextProvider,
  InviteContactsContextProvider,
} from "./src/Components/Context/UserContext";
import { ContactsForSMSProvider } from "./src/Components/Context/ContactsContext.js";
import {
  TempUserDataContextProvider,
} from "./src/Components/Context/TempUserContext.js";


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
                    <InviteContactsContextProvider>
                      <Navigation />
                    </InviteContactsContextProvider>
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
    // <MapComp/>
  );
}

// רשימת מסכים לבדיקה
