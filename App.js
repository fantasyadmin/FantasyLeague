import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Fantasy_League/Images/logo.PNG')}
                       style={{ flex: 1 }}>
        <Text style={styles.container}>ברוכים הבאים</Text>
        <StatusBar style="auto" />
        <View style={styles.Button}>
          <Button title='new user' ButtonStyle={{ borderColor: 'black', border: 'solid black', borderWidth: '3px' }}></Button>
          <Button title='existing user' ButtonStyle={styles.ButtonStyle}></Button>
        </View>

      </ImageBackground >
    </View >
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ImageBackground: '../Fantasy_League/Images/logo.PNG',
    backgroundColor: 'null',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    marginLeft: 100,
    marginRight: 100
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 5,
    justifyContent: 'space-around',
    marginBottom: '50px'

  },
  ButtonStyle: {
    border: 'solid black',
    borderWidth: '3px',
    color: "null",
  },
});
