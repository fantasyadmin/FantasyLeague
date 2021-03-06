import React, { useContext, useState, useEffect } from "react";

const userInfo = {
  nickname: null,
  picture: null,
  user_id: null,
  league_manager: null,
  games_played: null,
  player_score: null,
  total_assists: null,
  total_goals_recieved: null,
  total_goals_scored: null,
  total_pen_missed: null,
  total_wins: null,
};
const UserDataContext = React.createContext(userInfo);

const leagueInfo = {
  league_name: null,
  league_id: null,
  league_rules: null,
  league_pic: null,
  Invite_url: null,
};
const LeagueInfoContext = React.createContext(leagueInfo);

const FantasyTeamInfo = {
  players: [],
  team_budget: null,
  team_id: null,
  team_points: null,
};
const FantasyTeamInfoContext = React.createContext(FantasyTeamInfo);

const LeaguePlayersInfo = { players: [] };
const LeaguePlayersInfoContext = React.createContext(LeaguePlayersInfo);

const InviteContacts = { contacts: [] };
const InviteContactsContext = React.createContext(InviteContacts);

const matchInfo = {
  match_id: null,
  match_date: null,
  match_time: null,
  match_location: [],
  team_color1: null,
  team_color2: null,
};
const MatchInfoContext = React.createContext(matchInfo);

const leagueTeamsInfo = { teams: [] };
const LeagueTeamsInfoContext = React.createContext(leagueTeamsInfo);

const UserDatacontextProvider = ({ children }) => {
  const [userData, setUserData] = useState(userInfo);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

const LeagueInfoContextProvider = ({ children }) => {
  const [leagueData, setLeagueData] = useState(leagueInfo);

  return (
    <LeagueInfoContext.Provider value={{ leagueData, setLeagueData }}>
      {children}
    </LeagueInfoContext.Provider>
  );
};

const FantasyTeamInfoContextProvider = ({ children }) => {
  const [FantasyTeamData, setFantasyTeamData] = useState(FantasyTeamInfo);
  const { userData } = useContext(UserDataContext);

  useEffect(() => {
    console.log("preparing fetch.....========================= team id ", FantasyTeamData.team_id);
    fetch("https://proj.ruppin.ac.il/bgroup89/prod/api/GetFantasyTeam", {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
      body: JSON.stringify({
        team_id: FantasyTeamData.team_id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("team id: ", FantasyTeamData.team_id);

        console.log("team players: ", result);
        const players = [
          result.player1,
          result.player2,
          result.player3,
          result.player4,
        ];
        setFantasyTeamData((prevState) => ({ ...prevState, players }));
      });
  }, [FantasyTeamData.team_id]);

  return (
    <FantasyTeamInfoContext.Provider
      value={{ FantasyTeamData, setFantasyTeamData }}
    >
      {children}
    </FantasyTeamInfoContext.Provider>
  );
};

const LeaguePlayersInfoContextProvider = ({ children }) => {
  const [LeaguePlayersData, setLeaguePlayersData] = useState(LeaguePlayersInfo);

  return (
    <LeaguePlayersInfoContext.Provider
      value={{ LeaguePlayersData, setLeaguePlayersData }}
    >
      {children}
    </LeaguePlayersInfoContext.Provider>
  );
};

const InviteContactsContextProvider = ({ children }) => {
  const [InviteContactsData, setInviteContactsData] = useState(InviteContacts);

  return (
    <InviteContactsContext.Provider
      value={{ InviteContactsData, setInviteContactsData }}
    >
      {children}
    </InviteContactsContext.Provider>
  );
};

const MatchInfoContextProvider = ({ children }) => {
  const [matchData, setMatchData] = useState(matchInfo);

  return (
    <MatchInfoContext.Provider value={{ matchData, setMatchData }}>
      {children}
    </MatchInfoContext.Provider>
  );
};

const LeagueTeamsInfoContextProvider = ({ children }) => {
  const [leagueTeamsData, setLeagueTeamsData] = useState(leagueTeamsInfo);

  return (
    <LeagueTeamsInfoContext.Provider
      value={{ leagueTeamsData, setLeagueTeamsData }}
    >
      {children}
    </LeagueTeamsInfoContext.Provider>
  );
};

export {
  UserDataContext,
  UserDatacontextProvider,
  LeagueInfoContext,
  LeagueInfoContextProvider,
  FantasyTeamInfoContext,
  FantasyTeamInfoContextProvider,
  LeaguePlayersInfoContext,
  LeaguePlayersInfoContextProvider,
  MatchInfoContext,
  MatchInfoContextProvider,
  LeagueTeamsInfoContext,
  LeagueTeamsInfoContextProvider,
  InviteContactsContext,
  InviteContactsContextProvider,
};
