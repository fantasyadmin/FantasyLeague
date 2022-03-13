import WellcomeScreen from './src/Components/Screens/WellcomeScreen.jsx';
import SignInScreen from './src/Components/Screens/SignInScreen.jsx';
import SignUpScreen from './src/Components/Screens/SignUpScreen.jsx';
import Bottom from './src/Components/MenuComponents/Bottom_Menu.jsx';
import MailConfirm from './src/Components/Screens/ConfirnEmail.jsx';
import ForgotPassword from './src/Components/Screens/ForgotPassword.jsx';
import ResetPassword from './src/Components/Screens/ResetPassword.jsx';
import Navigation from './src/Components/Navigation/Navigation.jsx';
import Home from './src/Components/Screens/Home.jsx';

export default function App() {
  return (
    //<Navigation />
    //<WellcomeScreen />
    //<SignInScreen/>
    //<SignUpScreen/>
    <Bottom />
    //<MailConfirm/>
    //<ForgotPassword/>
    //<ResetPassword/>
    //<Home />
  );
}


// רשימת מסכים לבדיקה

//<WellcomeScreen />
//<SignInScreen/>
//<SignUpScreen/>
//<Bottom />
//<MailConfirm/>
//<forgotPassword/>
//<ResetPassword/>
//<Navigation />
//<Home />


// ניווט בין עמודים

//<NavigationContainer>
  //<Stack.Navigator screenOptions={topBar}>
   // <Stack.Screen name="Wellcome To The  צ'כונה" component={WellcomeScreen} />
 // </Stack.Navigator>
//</NavigationContainer>