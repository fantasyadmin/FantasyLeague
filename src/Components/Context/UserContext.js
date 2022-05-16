import React, { useState } from 'react';

const userInfo = {
  nickname: null,
  picture: null,
  user_id: null,
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
const leagueInfoContext = React.createContext(leagueInfo);


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
  match_date: null,
  match_time: null,
  match_location: null,
  team_color1: null,
  team_color2: null,
}
const matchInfoContext = React.createContext(matchInfo);


const leagueTeamsInfo = { teams: [], }
const leagueTeamsInfoContext = React.createContext(leagueTeamsInfo);

const UserDatacontextProvider = ({ children }) => {
  const [userData, setUserData] = useState(userInfo);
  const [leagueData, setLeagueData] = useState(leagueInfo);
  const [FantasyTeamData, setFantasyTeamData] = useState(FantasyTeamInfo);
  const [LeaguePlayersData, setLeaguePlayersData] = useState(LeaguePlayersInfo);
  const [matchData, setMatchData] = useState(matchInfo);
  const [leagueTeamsData, setLeagueTeamsData] = useState(leagueTeamsInfo);


  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      <leagueInfoContext.Provider value={{ leagueData, setLeagueData }}>
        <FantasyTeamInfoContext.Provider value={{ FantasyTeamData, setFantasyTeamData }}>
          <LeaguePlayersInfoContext.Provider value={{ LeaguePlayersData, setLeaguePlayersData }}>
            <matchInfoContext.Provider value={{ matchData, setMatchData }}>
              <leagueTeamsInfoContext.Provider value={{ leagueTeamsData, setLeagueTeamsData }}>
                {children}
              </leagueTeamsInfoContext.Provider>
            </matchInfoContext.Provider>
          </LeaguePlayersInfoContext.Provider>
        </FantasyTeamInfoContext.Provider>
      </leagueInfoContext.Provider>
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDatacontextProvider, leagueInfoContext, FantasyTeamInfoContext, LeaguePlayersInfoContext, matchInfoContext, leagueTeamsInfoContext };



