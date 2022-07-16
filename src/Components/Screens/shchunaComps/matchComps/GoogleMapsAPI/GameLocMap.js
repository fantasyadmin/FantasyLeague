import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Marker } from "react-native-maps";
import React, { useState, useEffect, useContext } from "react";
import { MatchInfoContext } from "../../../../Context/UserContext";
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
        //provider='google'
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
    flex: 1,
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - 20,
  },
  paragraph: {
    margin: 20,
    fontSize: 28,
    textAlign: "center",
  },
});

