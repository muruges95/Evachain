import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/logo.png';
import { retrieveData, postData, toJson } from '../api/db.js';
import Locater from '../components/MapScreenComponents/Locater';
import RouteRenderer from '../components/MapScreenComponents/RouteRenderer';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCj71zkYDMHtC2wjICDyUYluXOz54eKzmw';

const FiremanHomeIcons = props => {
	if (props.status === "verified") {
		var image = house1;
	} else if (props.status === "need assistance") {
		var image = house2;
	} else {
		var image = house3;
	}
	console.log('homeicon props',this.props);
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

const CivilianIcons = props => {
  return (
    <MapView.Marker
      coordinate={{
        latitude: 40.588371300000006,
        longitude: -122.42930109999998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      // style={{}}
      >

      <MapView.Callout style={{width:150}} onPress={() => {this.props.navigation.navigate('Dashboard')}}>
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Shelter</Text>
                </View>
			</MapView.Callout>

      </MapView.Marker>
  );
}

const VolunteerIcons = props => {
  return (
    <MapView.Marker
      coordinate={{
        latitude: 40.6149707,
        longitude: -122.4366157,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      // style={{}}
      >

      <MapView.Callout style={{width:150}} onPress={() => {this.props.navigation.navigate('Dashboard')}}>
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>Shelter</Text>
                </View>
			</MapView.Callout>

      </MapView.Marker>
  );  

}

// Example of a route list
const civilianRoutes = [
  {
    origin: {
      latitude: 40.57975660000001,
      longitude: -122.4249011
    },
    destination: {
      latitude: 40.5837568454257,
      longitude: -122.42677682316389
    },
    strokeColor: "blue"
  },
  {
    origin: {
      latitude: 40.5837568454257,
      longitude: -122.42677682316389
    },
    destination: {
      latitude: 40.58537867922963,
      longitude: -122.43014665918184
    },
    strokeColor: "red"
  },  
  {
    origin: {
      latitude: 40.58537867922963,
      longitude: -122.43014665918184
    },
    destination: {
      latitude: 40.588371300000006,
      longitude: -122.42930109999998
    },
    strokeColor: "orange"
  }
]

const firemanRoutes = [
  {
    origin: {
      latitude: 37.451264,
      longitude: -122.187760
    },
    destination: {
      latitude: 37.439990,
      longitude: -122.158129
    },
    strokeColor: "red"
  },
  {
    origin: {
      latitude: 37.451264,
      longitude: -122.187760
    },
    destination: {
      latitude: 37.488306,
      longitude: -122.217657
    },
    strokeColor: "green"
  },  
  {
    origin: {
      latitude: 37.451264,
      longitude: -122.187760
    },
    destination: {
      latitude: 37.452911,
      longitude: -122.183045
    },
    strokeColor: "pink"
  }
]

const volunteerRoutes = [
  {
    origin: {
      latitude: 40.618580600000016,
      longitude: -122.43134709999998
    },
    destination: {
      latitude: 40.6173924,
      longitude: -122.4342772
    },
    strokeColor: "blue"
  },
  {
    origin: {
      latitude: 40.6173924,
      longitude: -122.4342772
    },
    destination: {
      latitude: 40.6149707,
      longitude: -122.4366157
    },
    strokeColor: "orange"
  }
]

class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        latitude: 37.3318456,
        longitude: -122.0296002,
        latitudeDelta: 0.01,
        longitudeDelta: 0.012,
        logo: house1,
        view: "volunteer",
        homes: [],
        shelters: []
    };  
    this._getLocationAsync = this._getLocationAsync.bind(this);
  }


  civilianFocalPtLat = 40.58427959424427;
  civilianFocalPtLng = -122.427;

  volunteerFocalPtlat = 40.6167;
  volunteerFocalPtlng = -122.4338;


    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log("NOT GRANTED")
        } else {
            // console.log()
            let location = await Location.getCurrentPositionAsync({});
            this.setState({longitude: location.coords.longitude, latitude: location.coords.latitude});
            console.log(this.state.latitudeDelta);
            console.log(this.state.longitudeDelta);
            this._map.animateToCoordinate({
              latitude: this.volunteerFocalPtlat,
              longitude: this.volunteerFocalPtlng,
              // latitude: this.state.latitude,
              // longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta
            }, 1300)
        }
    }
    componentDidMount() {
			
        this._getLocationAsync();
        // this._getCoords();
        // setInterval(() => {
        //   this.getDB()
				// },1000)
				this.props.getHomes();
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
				    console.log('homes', this.props.homes);
					var homesIcons = this.props.homes.map((person, i) => {
						let home = person.doc;
						return (
							<FiremanHomeIcons lat={home.lat} lng={home.lng} key={home.lat} status={home.status} />
						);
					})
				}
				return (
					<View style={styles.container}>
						<MapView
							style={styles.map}
							ref = {component => this._map = component}
							initialRegion={initialRegion}
						>
							{homesIcons}
              <RouteRenderer routes={firemanRoutes} />
						</MapView>
						<Locater onPress={this._getLocationAsync}/>
        	</View>
				);
			} else if (this.state.view === "volunteer") {
				return (
					<View style={styles.container}>
						<MapView
								style={styles.map}
								ref = {component => this._map = component}
								initialRegion={initialRegion}
								>
                <VolunteerIcons />
								<RouteRenderer routes={volunteerRoutes} />
							</MapView>
              <Locater onPress={this._getLocationAsync}/>
						</View>
				);
			}
      return (
        <View style={styles.container}>
					<MapView
						style={styles.map}
						ref = {component => this._map = component}
						initialRegion={initialRegion}
					>
          <CivilianIcons />
          <RouteRenderer routes={civilianRoutes} />
					</MapView>
					<Locater onPress={this._getLocationAsync}/>
				</View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapScreen;