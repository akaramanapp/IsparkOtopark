import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import getParkList from './service/isparkService';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.9997026712811;
const LONGITUDE = 29.0333358664072;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const App = () => {
  const  [parkList,setparkList ]= useState([])

  useEffect(() => {
    getParkList()
      .then(response => {
        setparkList(response)
      })
  }, [])

  let region = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  }
  
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={region}
        style={styles.map}
      >
        {parkList.map(marker => (
          <Marker
            key={marker.ParkID}
            coordinate={{
              latitude: marker.Latitude,
              longitude: marker.Longitude
            }}
          />
        ))}
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});

export default App;
