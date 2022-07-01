import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Marker } from "react-native-maps";
import React, { useState, useEffect, useContext } from "react";
import * as Location from "expo-location";
import { MatchInfoContext } from "../../../../Context/UserContext";
import { NavigationContainer } from '@react-navigation/native';
import { Navigate } from "react-router-dom";
import locationLogo from "../../../../../../assets/locationLogo.png"

export default function GameLocMap(props) {
  const { matchData, setMatchData } = useContext(MatchInfoContext);
  const [location, setLocation] = useState({
    latitude: matchData.match_location.lat,
    longitude: matchData.match_location.lng,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const [marker, setMarker] = useState('');



  function savelocation(locationData) {
    setLocation({
      latitude: locationData.coords.latitude,
      longitude: locationData.coords.longitude
    })
    console.log("location received: ", locationData);
    Alert.alert(
      'שים לב! ',
      'האם לקבוע משחק במיקום הנבחר?',
      [
        {
          text: 'ביטול',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '         ' },
        { text: 'בחר מיקום למשחק', onPress: () => setGameLocation(locationData.coords) },
      ],
      { cancelable: false },
    );
  }


  function setGameLocation(locationData) {
    console.log("location received: ", locationData);
    if (!locationData) {
      setLocation({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      })
    }
    console.log("tell papa===", location);
    setMatchData(prevState => ({ ...prevState, match_location: location }))
    console.log("print context = ", matchData);
  }


  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <MapView
        style={styles.map}
        region={location}
        provider='google'
      >
        <Marker coordinate={location}  image={locationLogo} title="מיקום המשחק" description="   " />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 20,
  },
  paragraph: {
    margin: 20,
    fontSize: 28,
    textAlign: "center",
  },
});

let ruppin = "32.343190083930146, 34.91241507999918";

{
  /* <MapView style={styles.map} region={this.state.region}
onPress={(e) => this.setState({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] })}>
{
    // loop through markers array & render all markers
    this.state.markers.map((marker, i) => (
        <MapView.Marker coordinate={marker.latlng} key={i} />
    ))
}
</MapView> */
}

// cusom marker logo - fantasy league logo
{
  /* <Marker
  coordinate={{ latitude : latitude , longitude : longitude }}
  image={{uri: 'custom_pin'}}
/> */
}

//markers on map

{
  /* <MapView
  region={this.state.region}
  onRegionChange={this.onRegionChange}
>
  {this.state.markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
</MapView>
 */
}
