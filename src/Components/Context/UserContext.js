import React, {useState} from 'react'

const initialState = {
  nickname: null, 
  picture: null, 
  user_id: null,
  
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



