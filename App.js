import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MapView,MapMarker} from 'react-native-maps';

function App(){
  return (
    <View style={styles.container}>
      <Text>Mapa</Text>
      <View style={{height: 100, width: 100, backgroundColor: 'red'}}>
        <MapView style={{flex: 1}}>
          <MapMarker coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
        </MapView>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
