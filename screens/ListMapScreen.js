import React from 'react';
import { MapView } from "expo";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

// documentation link: https://github.com/bramus/react-native-maps-directions
import MapViewDirections from 'react-native-maps-directions';
 const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const origin1 = {latitude: 37.4512637, longitude: -122.18994862};
const destination1 = {latitude: 37.4400225, longitude: -122.1603};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBxkd_k7Aw4qDZagtS5BDuAxdNS6EZbues';

class MapScreen extends React.Component {

  	render() {
		return (
			<MapView
				style={{
					flex: 1
				}}
				initialRegion={{
					latitude: 37.3318456,
					longitude: -122.0296002,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}>
				<MapViewDirections
					origin={origin}
					destination={destination}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="red"
				/>
				<MapViewDirections
					origin={origin1}
					destination={destination1}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="green"
				/>
			</MapView>
		)
	}
}

class ListScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>Listview here.</Text>
			</View>
		)
	}
}

export default createMaterialTopTabNavigator(
	{
		Map: MapScreen,
		List: ListScreen
	}
);
