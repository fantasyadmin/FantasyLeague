import WellcomeScreen from './src/Components/Screens/WellcomeScreen.jsx';
import SignInScreen from './src/Components/Screens/SignInScreen.jsx';
import SignUpScreen from './src/Components/Screens/SignUpScreen.jsx';
import Bottom from './src/Components/MenuComponents/Bottom_Menu.jsx';
import MailConfirm from './src/Components/Screens/ConfirnEmail.jsx';
import ForgotPassword from './src/Components/Screens/ForgotPassword.jsx';
import ResetPassword from './src/Components/Screens/ResetPassword.jsx';
import Navigation from './src/Components/Navigation/Navigation.jsx';
import Home from './src/Components/Screens/Home.jsx';
import CreateLeague from './src/Components/Screens/FantasyLeagueComps/CreateLeague.jsx';
import TeamInTable from './src/Components/Screens/FantasyLeagueComps/TableComps/TeamInTable.jsx';
import LeagueTable from './src/Components/Screens/FantasyLeagueComps/TableComps/LeagueTable.jsx';
import { UserDatacontextProvider } from './src/Components/Context/UserContext.js';

export default function App() {
  return (
    <UserDatacontextProvider>
      <Navigation />
    </UserDatacontextProvider>
    //<LeagueTable/>
    //<TeamInTable/>
    //<WellcomeScreen />
    //<SignInScreen/>
    //<SignUpScreen />
    //<Bottom />
    //<MailConfirm/>
    //<forgotPassword/>
    //<ResetPassword/>
    //<Home />
    //<CreateLeague/>
  );
}


// רשימת מסכים לבדיקה

