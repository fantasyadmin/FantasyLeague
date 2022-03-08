import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "http://proj.ruppin.ac.il/bgroup89/Fantasy_league_proj/%D7%9C%D7%95%D7%92%D7%95.PNG" };

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
      <StatusBar style="auto" />
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'space-around',
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