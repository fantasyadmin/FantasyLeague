import React, { useContext, useState, useEffect } from 'react';

const tempUserInfo = { tempResults: [] };
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