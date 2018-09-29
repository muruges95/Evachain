import React from 'react';
import { MapView, Location, Permissions } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import house1 from '../assets/house1.png';
import house2 from '../assets/house2.png';
import house3 from '../assets/logo.png';
import greenHouse from "../assets/green_house.png";
import greyHouse from "../assets/grey_house.png"
import redHouse from "../assets/red_house.png"
import myLocation from "../assets/blue_dot.png"
import Locater from '../components/MapScreenComponents/Locater';
import RouteRenderer from '../components/MapScreenComponents/RouteRenderer';

const BLUE = "#1267ff";

const getAppropriateIcon = (point) => {
  if (point.status === "verified"){
    return greenHouse;
  } else if (point.status === "need assistance") {
    return redHouse;
  } else if (point.status === "myLocation"){
    return myLocation;
  } else {
    return greyHouse;
  }
}

const MapIcons = props => {
  return props.points.map((point, i) => {
    if (point.status !== undefined) {
      let image = getAppropriateIcon(point);
    
      return (
        <MapView.Marker 
          coordinate={{
            latitude: point.lat,
            longitude: point.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          image={image}
          key={point.lng}
          >
          
          <MapView.Callout style={{width:150}} >
                <View>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>{point.lng}</Text>
                </View>
			</MapView.Callout>  
        </MapView.Marker>
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
          />
      );
    }
    
  })
}


// 40.58767247144677%2C-122.42824551390834
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
    strokeColor: BLUE
  },
  {
    origin: {
      latitude: 40.5837568454257,
      longitude: -122.42677682316389
    },
    destination: {
      latitude: 40.585008197061825,
      longitude: -122.42787803384329
    },
    strokeColor: "red"
  },  
  {
    origin: {
      latitude: 40.585008197061825,
      longitude: -122.42787803384329
    },
    destination: {
      latitude: 40.58537867922963,
      longitude: -122.43014665918184
    },
    strokeColor: BLUE
  }, 
  {
    origin: {
      latitude: 40.58537867922963,
      longitude: -122.43014665918184
    },
    destination: {
      latitude: 40.58764571387112,
      longitude: -122.42822614994179
    },
    strokeColor: "orange"
  },
  {
    origin: {
      latitude: 40.58764571387112,
      longitude: -122.42822614994179
    },
    destination: {
      latitude: 40.588371300000006,
      longitude: -122.42930109999998
    },
    strokeColor: BLUE
  }
]

const civilianPoints = [
  {
    lat: 40.588371300000006,
    lng: -122.42930109999998,

  },
  {
    lat: 40.57945000000001,
    lng: -122.4249511,
      status: "myLocation"
  },
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
    strokeColor: BLUE
  },
  {
    origin: {
      latitude: 40.6173924,
      longitude: -122.4342772
    },
    destination: {
      latitude: 40.61569504377707,
      longitude: -122.4354638432618
    },
    strokeColor: "orange"
  },
  {
    origin: {
      latitude: 40.61569504377707,
      longitude: -122.4354638432618
    },
    destination: {
      latitude: 40.6149707,
      longitude: -122.4366157
    },
    strokeColor: BLUE
  }
]

const firemanRoutes = [
    {
        origin: {
            latitude: 40.690424300000004,
            longitude: -122.3862871
        },
        destination: {
            latitude: 40.68906015207363,
            longitude: -122.38659401687931
        },
        strokeColor: BLUE,
    },
    {
      origin: {
          latitude: 40.68906015207363,
          longitude: -122.38659401687931
      },
      destination: {
          latitude: 40.68807234007045,
          longitude: -122.38688104983606
      },
      strokeColor: "orange",
    },
    {
      origin: {
          latitude: 40.68807234007045,
          longitude: -122.38688104983606
      },
      destination: {
          latitude: 40.68977537472434,
          longitude: -122.39113825938927
      },
      strokeColor: BLUE,
    },
    {
      origin: {
          latitude: 40.68977537472434,
          longitude: -122.39113825938927
      },
      destination: {
          latitude: 40.689977672745655,
          longitude: -122.3928180908365
      },
      strokeColor: "red",
    },
    {
      origin: {
          latitude: 40.689977672745655,
          longitude: -122.3928180908365
      },
      destination: {
          latitude: 40.690051099999984,
          longitude: -122.39385930000003
      },
      strokeColor: BLUE,
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

        strokeColor: BLUE,
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

        strokeColor: BLUE,
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

        strokeColor: BLUE,
    }
]

const civilianFocalPtLat = 40.58427959424427;
const civilianFocalPtLng = -122.427;
const civilianFocalPtLatDelta = 0.01;
const civilianFocalPtLngDelta = 0.012;
const volunteerFocalPtlat = 40.6167;
const volunteerFocalPtlng = -122.4338;
const volunteerFocalPtLatDelta = 0.002;
const volunteerFocalPtLngDelta = 0.008;
const firemanFocalPtlat = 40.690424300000004;
const firemanFocalPtlng = -122.3893871;
const firemanFocalPtLatDelta = 0.003;
const firemanFocalPtLngDelta = 0.01;

class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        latitude: 37.4883923,
        longitude: -122.2190339,
        latitudeDelta: firemanFocalPtLatDelta,
        longitudeDelta: firemanFocalPtLngDelta,
        logo: house1,
        view: "fireman",
        homes: [],
        shelters: []
    };  
    this._getLocationAsync = this._getLocationAsync.bind(this);

  }

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
              latitude: firemanFocalPtlat,
              longitude: firemanFocalPtlng,
              // latitude: civilianFocalPtLat,
              // longitude: civilianFocalPtLng,
              // latitude: this.state.latitude,
              // longitude: this.state.longitude,
              // latitude: firemanFocalPtlat,
              // longitude: firemanFocalPtlng,
              latitudeDelta: firemanFocalPtLatDelta,
              longitudeDelta: firemanFocalPtLngDelta
            }, 1300)
        }
    }
    componentDidMount() {
			
        // this._getLocationAsync();
        // this._getCoords();
        setInterval(() => {
          this.props.getHomes()
				},1000)
				// this.props.getHomes();
    }

    render() {
			var initialRegion={
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				latitudeDelta: this.state.latitudeDelta,
				longitudeDelta: this.state.longitudeDelta
			}
      let homePoints = [];
      if (this.props.homes !== undefined) {
        console.log('homes', this.props.homes);
        homePoints = this.props.homes.map((person, i) => {
          let home = person.doc;
          return {
            lat: home.lat,
            lng: home.lng,
            status: home.status,
          }
        });
      }

			if (this.state.view === "fireman") {
				
				return (
					<View style={styles.container}>
						<MapView
							style={styles.map}
							ref = {component => this._map = component}
							initialRegion={initialRegion}
						>
              {/* {homesIcons} */}
              <MapIcons points={homePoints}/>
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
                <MapIcons points={homePoints}/>
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
          <MapIcons points={homePoints}/>
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