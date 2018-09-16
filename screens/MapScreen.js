import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/logo.png';
import { retrieveData, postData, toJson } from '../api/db.js';

const LatLongInfo = props => (
	<View>
		<TouchableOpacity >
				<Text>longitude: {props.longitude}</Text>
				<Text>latitude: {props.latitude}</Text>
		</TouchableOpacity>
	</View>
);

const GOOGLE_MAPS_APIKEY = 'AIzaSyBxkd_k7Aw4qDZagtS5BDuAxdNS6EZbues';

const HomeIcon = props => {
	if (props.status === "verified") {
		var image = house1;
	} else if (props.status === "need assistance") {
		var image = house2;
	} else {
		var image = house3;
	}
	return (
		<MapView.Marker
			coordinate={{
			latitude: props.lat,
			longitude: props.lng,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
			}}
			image={image}
			style={{width:20, height:20}}
		>
			<MapView.Callout style={{width:150}} onPress={() => {this.props.navigation.navigate('Dashboard')}}>
			<View>
					<Text style={{ fontSize: 16, marginBottom: 5 }}>Hello Bro</Text>
			</View>
			</MapView.Callout>
		</MapView.Marker>   
	);
};

class MapScreen extends React.Component {
    state = {
        latitude: 37.3318456,
        longitude: -122.0296002,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
				logo: house1,
				view: "authority",
				homes: [],
				shelters: []
    };
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log("NOT GRANTED")
        } else {
            // console.log()
            let location = await Location.getCurrentPositionAsync({});
            this.setState({longitude: location.coords.longitude, latitude: location.coords.latitude});
            console.log("Current Location is: " + JSON.stringify(location));
        }
    }
    componentDidMount() {
			
        // this._getLocationAsync();
        // this._getCoords();
        // setInterval(() => {
        //   this.getDB()
				// },1000)
				this.props.getHomes();
    }

    _getCoords = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
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
    onRegionChange = (region) => {
        this.setState({
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta
        })
    }
    render() {
			var initialRegion={
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				latitudeDelta: this.state.latitudeDelta,
				longitudeDelta: this.state.longitudeDelta
			}

			if (this.state.view === "authority") {
				if (this.props.homes === undefined || this.props.homes === []) {
					var homesIcons = null;
				} else {
					var homesIcons = this.props.homes.map((person, i) => {
						let home = person.doc;
						return (
							<HomeIcon lat={home.lat} lng={home.lng} key={i} status={home.status} />
						);
					})
				}
				return (
					<View style={styles.container}>
						<MapView
								style={styles.map}
								ref = {component => this._map = component}
								initialRegion={initialRegion}
								onRegionChange={this.onRegionChange}
								>
									{homesIcons}
						</MapView>
						<LatLongInfo latitude={this.state.latitude} longitude={this.state.longitude} />
        	</View>
				);
			} else if (this.state.view === "volunteer") {
				return (
					<View style={styles.container}>
						<MapView
								style={styles.map}
								ref = {component => this._map = component}
								initialRegion={initialRegion}
								onRegionChange={this.onRegionChange}
								>
									
							</MapView>
							<LatLongInfo latitude={this.state.latitude} longitude={this.state.longitude} />
						</View>
				);
			}
      return (
        <View style={styles.container}>
					<MapView
							style={styles.map}
							ref = {component => this._map = component}
							initialRegion={initialRegion}
							onRegionChange={this.onRegionChange}
							>
								
						</MapView>
						<LatLongInfo latitude={this.state.latitude} longitude={this.state.longitude} />
					</View>
      );
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