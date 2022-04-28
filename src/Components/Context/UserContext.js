<<<<<<< HEAD
import React, { useState } from 'react'

const initialState = {
  //user info
  nickname: null,
  picture: null,
  user_id: null,
  
  //league info
  league_name: null,
  league_id: null,
  
  //fantasy team info
  player1: null,
  player2: null,
  player3: null,
  player4: null,
  team_budget: null,
  team_id: null,
  team_points: null,

  //player info
  player_score: null,
  team_budget: null,
  team_id: null,
  team_points: null,
  total_assists: null,
  total_goals_recieved: null,
  total_goals_scored: null,
  total_pen_missed: null,
  total_wins: null,

  
=======
import React, {useState} from 'react'

const initialState = {
  nickname: null, 
  picture: null, 
  user_id: null,
  
>>>>>>> 3f1dd4e9e47f1317e4c798c27ab03be8ddfc469d
};

const UserDataContext = React.createContext(initialState);

const UserDatacontextProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialState);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDatacontextProvider };



