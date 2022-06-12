import React, { useContext, useState, useEffect } from 'react';

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
};
const LeagueInfoContext = React.createContext(leagueInfo);


const FantasyTeamInfo = {
  players: [
    //{ 'user_id': 12, 'nickname': "ahmed", 'points': 88 },
    //{ 'user_id': 45, 'nickname': "pele", 'points': 45 },
    //{ 'user_id': 33, 'nickname': "guy", 'points': 3 },
    //{ 'user_id': 86, 'nickname': "dor", 'points': 34 }
  ],
  team_budget: null,
  team_id: null,
  team_points: null,
};
const FantasyTeamInfoContext = React.createContext(FantasyTeamInfo);


const LeaguePlayersInfo = { players: [], };
const LeaguePlayersInfoContext = React.createContext(LeaguePlayersInfo);

const matchInfo = {
  match_id: null,
  match_date: null,
  match_time: null,
  match_location: null,
  team_color1: null,
  team_color2: null,
}
const MatchInfoContext = React.createContext(matchInfo);


const leagueTeamsInfo = { teams: [], }
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
    fetch('https://proj.ruppin.ac.il/bgroup89/prod/api/ManageFantasyTeam/5', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      }),
      body: JSON.stringify({
        team_id: userData.team_id
      })
    })
      .then(response => {
        return response.json()
      })
      .then((result) => {
        const players = [
          result.player1,
          result.player2,
          result.player3,
          result.player4,
        ]
        setFantasyTeamData(prevState => ({ ...prevState, players }))
      })
  }, [userData.team_id])



  return (
    <FantasyTeamInfoContext.Provider value={{ FantasyTeamData, setFantasyTeamData }}>
      {children}
    </FantasyTeamInfoContext.Provider>
  );
};

const LeaguePlayersInfoContextProvider = ({ children }) => {
  const [LeaguePlayersData, setLeaguePlayersData] = useState(LeaguePlayersInfo);


  return (
    <LeaguePlayersInfoContext.Provider value={{ LeaguePlayersData, setLeaguePlayersData }}>
      {children}
    </LeaguePlayersInfoContext.Provider>
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
    <LeagueTeamsInfoContext.Provider value={{ leagueTeamsData, setLeagueTeamsData }}>
      {children}
    </LeagueTeamsInfoContext.Provider>
  );
};


export {
  UserDataContext, UserDatacontextProvider,
  LeagueInfoContext, LeagueInfoContextProvider,
  FantasyTeamInfoContext, FantasyTeamInfoContextProvider,
  LeaguePlayersInfoContext, LeaguePlayersInfoContextProvider,
  MatchInfoContext, MatchInfoContextProvider,
  LeagueTeamsInfoContext, LeagueTeamsInfoContextProvider
};



