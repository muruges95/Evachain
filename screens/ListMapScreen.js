import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MapScreen from './MapScreen';
import ListScreen from './ListScreen';


import {
	createNavigator,
	createNavigationContainer,
	SafeAreaView,
	TabRouter,
  } from 'react-navigation';

const CustomTabBar = ({ navigation }) => {
	const { routes } = navigation.state;
	return (
		<SafeAreaView style={styles.tabContainer}>
			<View style={{ borderColor: "#ff5a72",flexDirection: 'row', justifyContent: 'center', borderWidth: 2, borderRadius: 10, width: 120 }}>
				{routes.map(route => (
					
				<TouchableOpacity
					onPress={() => navigation.navigate(route.routeName)}
					style={styles.tab}
					key={route.routeName}>
					<Text style={{ lineHeight: 20, color: "#ff5a72" }}>{route.routeName}</Text>
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
});

export default CustomTabs;
