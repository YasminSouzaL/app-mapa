import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mapa Abaixo: </Text>
      <MapView
        provider="osmdroid" // Use o provedor OpenStreetMap
        style={styles.mapStyle}
        region={{
          latitude: -19.197,
          longitude: -46.23719,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: -19.197,
            longitude: -46.23719,
          }}
          title="Minha Casa"
          description="Aqui é minha casa"
        />
        <Marker
          coordinate={{
            latitude: -19.21748,
            longitude: -46.22327,
          }}
          title="UFV-CRP"
          description="Aqui é a UFV-CRP"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee3e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#ffffff',
  },
  mapStyle: {
    width: 300,
    height: 300,
  },
});
