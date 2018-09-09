import React from 'react';
import { MapView } from "expo";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

import {
	createNavigator,
	createNavigationContainer,
	SafeAreaView,
	TabRouter,
  } from 'react-navigation';

import { Button } from 'react-native-elements';


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
				style={styles.map}
				initialRegion={{
					latitude: 37.3318456, 
					longitude: -122.0296002,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}>
				
			</MapView>
		)
	}
}

const ListSeparator = () => (
	<View style={{ borderBottomColor: '#e7e7e8', borderBottomWidth: 1, marginBottom: 5, marginTop: 10 }}/>
);

class ListScreen extends React.Component {
	
	
	
	render() {
		data = [
			{
				key: "1",
				shelterName: "Menlo Park Shelter",
				distance: "1.98 miles",
				petFriendliness: "Pet Friendly", 
				maximunCapacity: "12 people"
			},
			{
				key: "2",
				shelterName: "Palo Alto Shelter",
				distance: "1.98 miles",
				petFriendliness: "Pet Friendly", 
				maximunCapacity: "12 people"
			},
			{
				key: "3",
				shelterName: "Redwood City Shelter",
				distance: "1.98 miles",
				petFriendliness: "Pet Friendly", 
				maximunCapacity: "12 people"
			},
			{
				key: "4",
				shelterName: "San Mateo Shelter",
				distance: "1.98 miles",
				petFriendliness: "Pet Friendly", 
				maximunCapacity: "12 people"
			},
			{
				key: "5",
				shelterName: "San Francisco Shelter",
				distance: "1.98 miles",
				petFriendliness: "Pet Friendly", 
				maximunCapacity: "12 people"
			}	
		];

		
		return (
			<View style={{ margin: 15 }}>
				<Text style={{ fontSize: 24, marginBottom: 15, fontWeight: "bold", textAlign: "center" }}>Nearest Shelters</Text>
				<FlatList
					style={{ marginBottom: 98 }}
					data={data}
					ItemSeparatorComponent={ListSeparator}
					renderItem={({item}) => (
						<View >
							<Text style={{ fontSize: 16, marginBottom: 5 }}>
								{item.shelterName}
							</Text>
							<View style={{flex: 1, flexDirection: 'row'}}>
								<Text style={{ fontSize: 13, color: "#919191" }}>
									{item.distance}
								</Text>

								<View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#919191", margin: 5 }}>
								</View>

								<Text style={{ fontSize: 13, color: "#919191" }}>
									{item.petFriendliness}
								</Text>
							</View>
							<Button buttonStyle={{ backgroundColor: "#ff5a72", width: 150, height: 45, borderRadius: 12, marginTop: 20, marginLeft: -15 }}  title="MORE DETAILS"/>
							
						</View>
					)}
				/>
			</View>
		);
	}
}

createMaterialTopTabNavigator(
	{
		Map: MapScreen,
		List: ListScreen
	}
);

const CustomTabBar = ({ navigation }) => {
	const { routes } = navigation.state;
	return (
	  <SafeAreaView style={styles.tabContainer}>
	  <View style={{ borderColor: "#ff5a72",flexDirection: 'row', justifyContent: 'center', borderWidth: 2, borderRadius: 10, width: 120 }}>
			{routes.map(route => (
				
		  <TouchableOpacity
			onPress={() => navigation.navigate(route.routeName)}
			style={styles.tab}
			key={route.routeName}
		  >
			<Text style={{ lineHeight: 20 }}>{route.routeName}</Text>
		  </TouchableOpacity>
		  
		))}
		</View>
	  </SafeAreaView>
	);
  };

  const CustomTabView = ({ descriptors, navigation }) => {
  const { routes, index } = navigation.state;
  const descriptor = descriptors[routes[index].key];
  const ActiveScreen = descriptor.getComponent();
  if (index === 1) {
	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<ActiveScreen navigation={descriptor.navigation} />
			<CustomTabBar navigation={navigation} />	
		</SafeAreaView>
	  );
  } else {
	  return (
		 <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
			<ActiveScreen navigation={descriptor.navigation} />
			<CustomTabBar navigation={navigation} />	
		</SafeAreaView> 
	  );
  }
  
};

const CustomTabRouter = TabRouter(
  {
    Map: {
      screen: MapScreen,
      path: 'Map',
    },
    List: {
      screen: ListScreen,
      path: 'List',
    }
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Map',
  }
);

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabView, CustomTabRouter, {})
);

const styles = StyleSheet.create({
  tabContainer: {
	height: 30,
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	justifyContent: 'center',
	flexDirection: 'row'
  },
  tab: {
	flex: 0,
	width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CustomTabs;