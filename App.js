import React, { useState, useEffect } from "react";
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
import { TempUserDataContextProvider } from "./src/Components/Context/TempUserContext.js";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  useEffect(() => {
    const getPremission = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Failed to get push token for push notification!");
          return;
        }
      } else {
        alert("Must use physical device for Push Notifications");
      }
      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
    };
    getPremission();
  }, []);
  return (
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
  );
}

// רשימת מסכים לבדיקה
