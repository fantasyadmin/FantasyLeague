import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Alert, Pressable } from "react-native";
import { Marker } from "react-native-maps";
import React, { useState, useEffect, useContext } from "react";
import * as Location from "expo-location";
import { MatchInfoContext } from "../../../../Context/UserContext";
import CustomButton from "../../../../CustomComps/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { image } from "../../../../../../assets/exports";
import logoTransparent from "../../../../../../assets/logoTransparent.png"

export default function MapComp(props) {
  const navigation = useNavigation()
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
        {
          text: 'בחר מיקום למשחק', onPress: () => {
            setGameLocation(locationData.coords)
            navigation.goBack();
          }
        },
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
    setMatchData(prevState => ({ ...prevState, match_location: { latitude: locationData.latitude, longitude: locationData.longitude } }))
    console.log("print context = ", matchData);
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locationLocal = await Location.getCurrentPositionAsync({});

      let obj = {
        latitude: locationLocal.coords.latitude,
        longitude: locationLocal.coords.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      };
      setLocation(obj);
    })();
  }, []);

  const handleGoBack = () => {
    return navigation.goBack();
  }

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  function pressed(data) {
    savelocation({
      coords: {
        latitude: data.nativeEvent.coordinate.latitude,
        longitude: data.nativeEvent.coordinate.longitude
      }
    })
    setMarker({ markers: [{ name: data.name }, { description: data.name }, { latlng: data.nativeEvent.coordinate }] })
  }


  return (
    <View style={styles.container}>
      <Pressable style={styles.mapBtn} onPress={handleGoBack}>
        <View>
          <Text style={styles.text}>חזור</Text>
        </View>
      </Pressable>
      <MapView
        style={styles.map}
        region={location}
        provider='google'
        onPoiClick={(e) => savelocation({ name: e.nativeEvent.name, coords: e.nativeEvent.coordinate })}
        onPress={(e) => pressed(e)} >
        <MapView.Marker coordinate={location} />
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
    marginTop: 35,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
    zIndex: 1
  },
  mapBtn: {
    zIndex: 10,
    position: 'absolute',
    top: "90%",
    backgroundColor: '#1b91f3',
    width: '30%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  paragraph: {
    margin: 20,
    fontSize: 28,
    textAlign: "center",
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17
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
