import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Marker } from "react-native-maps";
import React, { useState, useEffect, useContext } from "react";
import * as Location from "expo-location";
import { MatchInfoContext } from "../../../../Context/UserContext";


export default function MapComp(props) {
  const [location, setLocation] = useState({
    latitude: 32.343190083930146,
    longitude: 34.91241507999918,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const [marker, setMarker] = useState('');

  const { matchData, setMatchData } = useContext(MatchInfoContext);

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
      setLocation(
        locationData.coords
      )
    }
    console.log("tell papa===", location);
    //props.matchLocationFunc(locationData.coords.latitude, locationData.coords.longitude)
    setMatchData(prevState => ({ ...prevState, match_location: {latitude: locationData.latitude, longitude: locationData.longitude} }))
    console.log("print context = ", matchData);


    //Navigate.goBack();
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locationLocal = await Location.getCurrentPositionAsync({});

      //console.log(locationLocal);
      let obj = {
        latitude: locationLocal.coords.latitude,
        longitude: locationLocal.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      };
      setLocation(obj);
    })();
  }, []);

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
        onPoiClick={(e) => savelocation({ name: e.nativeEvent.name, coords: e.nativeEvent.coordinate })}
        onPress={(e) => savelocation({
          coords: {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          }
        })
        }
      // onPress={(e) => setMarker({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] })}
      >
        {/* <MapView.Marker coordinate={location} key={i} /> */}
        <Marker coordinate={location} title="avi" description="desc1" />
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
