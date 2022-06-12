import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import React, { useState, useEffect } from "react";
//import Geolocation from "@react-native-community/geolocation";


export default function MapComp() {
    const [initialLoc, setinitialLoc] = useState({
        latitude: 32.343190083930146,
        longitude: 34.91241507999918,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
    })
    const [marker, setMarker] = useState()


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={initialLoc}
                //onPress={(e) => setMarker({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] })}
            >
                {/* <MapView.Marker coordinate={marker.latlng} key={i} /> */}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

let ruppin = '32.343190083930146, 34.91241507999918'

{/* <MapView style={styles.map} region={this.state.region}
onPress={(e) => this.setState({ markers: [...this.state.markers, { latlng: e.nativeEvent.coordinate }] })}>
{
    // loop through markers array & render all markers
    this.state.markers.map((marker, i) => (
        <MapView.Marker coordinate={marker.latlng} key={i} />
    ))
}
</MapView> */}

// cusom marker logo - fantasy league logo
{/* <Marker
  coordinate={{ latitude : latitude , longitude : longitude }}
  image={{uri: 'custom_pin'}}
/> */}

//markers on map

{/* <MapView
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
 */}