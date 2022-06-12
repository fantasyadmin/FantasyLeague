import React, { useState } from 'react';

const tempUserInfo = {
    nickname: 0,
    picture: 0,
    user_id: 0,
    games_played: 0,
    player_score: 0,
    total_assists: 0,
    total_goals_recieved: 0,
    total_goals_scored: 0,
    total_pen_missed: 0,
    total_wins: 0,
};
const TempUserDataContext = React.createContext(tempUserInfo);

const TempUserDataContextProvider = ({ children }) => {
    const [tempUserData, setTempUserData] = useState(tempUserInfo);


    return (
        <TempUserDataContext.Provider value={{ tempUserData, setTempUserData }}>
            {children}
        </TempUserDataContext.Provider>
    );
};





export {
    TempUserDataContext, TempUserDataContextProvider,
};