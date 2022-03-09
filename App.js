import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/Login_Process/LoginPage';
import WellcomeScreen from './Components/Login_Process/WellcomeScreen';
import BottomMenu from './Components/MenuComponents/BottomMenu';


const Stack = createNativeStackNavigator();

const topBar = {
  headerStyle: {
    backgroundColor: '#4472c4',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center'
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={topBar}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Wellcome To The  צ'כונה" component={WellcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Button: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 50,
  },
});

