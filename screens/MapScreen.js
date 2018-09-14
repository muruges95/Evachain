import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import { retrieveData, postData, toJson } from '../api/db.js';

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
        longitudeDelta: 0.0421,
        logo: house1
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
        // this._getLocationAsync();
        this._getCoords();
        setInterval(() => {
          this.getDB()
        },1000)
    }

    _getCoords = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({longitude: position.coords.longitude, latitude: position.coords.latitude});
                // var initialPosition = JSON.stringify(position.coords);
                // this.setState({position: initialPosition});
                // let tempCoords = {
                //     latitude: Number(position.coords.latitude),
                //     longitude: Number(position.coords.longitude)
                // }
                // this._map.animateToCoordinate(tempCoords, 1);
              }, function (error) { alert(error) },
         );
    };
    getDB = () => [
      retrieveData('testdb1').then( (data) => {
        console.log(toJson(data,['name','age','height']));
      })
      .catch(err=> {
        console.log('gg');
      })
    ]
    onRegionChange = (region) => {
        this.setState({
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
        })
    }
    render() {
      return (
        <View style={styles.container}>
          <MapView
              style={styles.map}
              ref = {component => this._map = component}
              initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: this.state.latitudeDelta,
                    longitudeDelta: this.state.longitudeDelta
              }}
              onRegionChange={this.onRegionChange}
              >
                <MapView.Marker
                    coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                    }}
                    image={this.state.logo}
                    style={{width:20, height:20}}
                >
                    <MapView.Callout style={{width:150}} onPress={() => {this.props.navigation.navigate('Dashboard')}}>
                    <View>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>Hello Bro</Text>
                    </View>
                    </MapView.Callout>
                </MapView.Marker>   
          </MapView>
          <View>
            <TouchableOpacity onPress={this.getDB}>
                <Text>longitude: {this.state.longitude}</Text>
                <Text>latitude: {this.state.latitude}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapScreen;