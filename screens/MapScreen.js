import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import logo from '../assets/logo.png';

// documentation link: https://github.com/bramus/react-native-maps-directions
import MapViewDirections from 'react-native-maps-directions';
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const origin1 = {latitude: 37.4512637, longitude: -122.18994862};
const destination1 = {latitude: 37.4400225, longitude: -122.1603};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBxkd_k7Aw4qDZagtS5BDuAxdNS6EZbues';

class MapScreen extends React.Component {
    state = {
        latitude: 37.3318456,
        longitude: -122.0296002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log("NOT GRANTED")
        } else {
            let location = await Location.getCurrentPositionAsync({});
            this.setState({longitude: location.coords.longitude, latitude: location.coords.latitude});
            console.log(JSON.stringify(location));
        }
    }
    componentDidMount() {
        this._getLocationAsync();
    }
    render() {
      return (
          <MapView
              style={styles.map}
              initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: this.state.latitudeDelta,
                    longitudeDelta: this.state.longitudeDelta
              }}>
                <MapView.Marker
                    coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                    }}
                    image={logo}
                    style={{width:20, height:20}}
                >
                    <MapView.Callout style={{width:150}} onPress={() => {this.props.navigation.navigate('Dashboard')}}>
                    <View>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>Hello Bro</Text>
                    </View>
                    </MapView.Callout>
                </MapView.Marker>   
          </MapView>
      )
  }
}

const styles = StyleSheet.create({
    map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
  	},
})

export default MapScreen;