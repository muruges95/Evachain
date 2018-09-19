import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/logo.png';
import greenHouse from "../assets/green_house.png";
import greyHouse from "../assets/grey_house.png"
import redHouse from "../assets/red_house.png"
import Locater from '../components/MapScreenComponents/Locater';
import RouteRenderer from '../components/MapScreenComponents/RouteRenderer';

const getAppropriateHouse = (point) => {
  if (point.status === "verified"){
    return greenHouse;
  } else if (point.status === "need assistance") {
    return redHouse;
  } else {
    return greyHouse;
  }
}

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
  return props.points.map((point, i) => {
    if (point.status !== undefined) {
      let image = getAppropriateHouse(point);
    
      return (
        <MapView.Marker 
          coordinate={{
            latitude: point.lat,
            longitude: point.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          image={image}
          style={{width:5, height:5}}
          key={point.lng}
          />
      );
    } else {
      return (
        <MapView.Marker 
          coordinate={{
            latitude: point.lat,
            longitude: point.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          key={point.lng}
          // image={image}
          // style={{width:20, height:20}}
          />
      );
    }
    
  })
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

const civilianPoints = [
  {
    lat: 40.588371300000006,
    lng: -122.42930109999998,

  },
  {
    lat: 40.57975660000001,
    lng: -122.4249011,
      status: "verified"
  },
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

const fireManViewRoutes = [
    {
        origin: {
            latitude: 40.690424300000004,
            longitude: -122.3862871
        },
        destination: {
            latitude: 40.690051099999984,
            longitude: -122.39385930000003
        },
        strokeColor: "black",
    },
    {
        origin: {
            latitude: 40.690051099999984,
            longitude: -122.39385930000003
        },
        destination: {
            latitude: 40.6929061,
            longitude: -122.3919378
        },

        strokeColor: "black",
    },
    {
        origin: {
            latitude: 40.6929061,
            longitude: -122.3919378
        },
        destination: {
            latitude: 40.69071070000001,
            longitude: -122.38785080000002
        },

        strokeColor: "black",
    },
    {
        origin: {
            latitude: 40.69071070000001,
            longitude: -122.38785080000002
        },
        destination: {
            latitude: 40.69236109999998,
            longitude: -122.39013090000003
        },

        strokeColor: "black",
    }
]

const fireManViewHomes = [
    {
        lat: 40.690424300000004,
        lng: -122.3862871,
        status: "need assistance"
    },
    {
        lat: 40.690051099999984,
        lng: -122.39385930000003,
        status: "need assistance"
    },
    {
        lat: 40.69071070000001,
        lng: -122.38785080000002,
        status: "need assistance"
    },
    {
        lat: 40.69236109999998,
        lng: -122.39013090000003,
        status: "need assistance"
    },
    {

        lat: 40.691417399999956,
        lng: -122.38857969999998,
        status: "verified"
    },
    {

        lat: 40.69172650000001,
        lng: -122.39101520000003,
        status: "verified"
    },
    {

        lat: 40.69058769999998,
        lng: -122.39014610000004,
        status: "verified"
    },
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
        view: "civilian",
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
              // latitude: this.volunteerFocalPtlat,
              // longitude: this.volunteerFocalPtlng,
              latitude: this.civilianFocalPtLat,
              longitude: this.civilianFocalPtLng,
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
          <CivilianIcons points={civilianPoints}/>
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