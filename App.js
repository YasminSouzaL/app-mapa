import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapView style={{ width: 400, height: 400 }}
        region={{
          latitude: -19.19700,
          longitude: -46.23719,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: -19.19700,
            longitude: -46.23719,
          }}
          title="Casa"
          description="Minha casa"
        />
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
});
