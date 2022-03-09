import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native'
import WellcomeScreen from './Components/Login_Process/WellcomeScreen';
import BottomMenu from './Components/MenuComponents/BottomMenu';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './Components/Login_Process/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const image = { uri: "http://proj.ruppin.ac.il/bgroup89/Fantasy_league_proj/%D7%9C%D7%95%D7%92%D7%95.PNG" };

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.container}></Text>
        <View style={styles.Button}>
          <Button title='new user' onPress={''}></Button>
          <Text>                                  </Text>
          <Button title='existing user' onPress={''}></Button>
        </View>
      </View >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 30,
},
Button: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 50,
},
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: 'cover'
  },
});