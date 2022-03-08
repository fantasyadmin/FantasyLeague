import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, } from 'react-native';
import WellcomeScreen from './Components/Login_Process/WellcomeScreen';
import BottomMenu from './Components/MenuComponents/BottomMenu';

const image = { uri: "http://proj.ruppin.ac.il/bgroup89/Fantasy_league_proj/%D7%9C%D7%95%D7%92%D7%95.PNG" };

export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <WellcomeScreen />
      <BottomMenu />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: 'cover'
  },
});