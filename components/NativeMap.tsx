import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function NativeMap() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.85, // Main location
          longitude: 76.2711,
          latitudeDelta: 1.0, // Adjust for zoom level
          longitudeDelta: 1.0,
        }}
      >
        <Marker
          coordinate={{ latitude: 10.991, longitude: 76.9514 }} // Marker 1
          title={"Bangalore"}
          description={"Near Bangalore, Karnataka"}
        />
        <Marker
          coordinate={{ latitude: 10.5276, longitude: 76.2144 }} // Marker 2
          title={"Palakkad"}
          description={"Near Palakkad, Kerala"}
        />
        <Marker
          coordinate={{ latitude: 10.8041, longitude: 76.6626 }} // Marker 3
          title={"Madurai"}
          description={"Near Madurai, Tamil Nadu"}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
