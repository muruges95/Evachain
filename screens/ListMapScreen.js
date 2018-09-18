import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import {
	createNavigator,
	createNavigationContainer,
	SafeAreaView,
	TabRouter,
  } from 'react-navigation';
import MapScreenContainer from '../containers/MapScreenContainer';
import ListScreenContainer from '../containers/ListScreenContainer';

const CustomTabBar = ({ navigation }) => {
	const { routes } = navigation.state;
	return (
		<SafeAreaView style={styles.tabContainer}>
			<View style={{ borderColor: "#ff5a72",flexDirection: 'row', justifyContent: 'center', borderWidth: 2, borderRadius: 20, width: 120 }}>
				{routes.map(route => {
					
					if (route.key === "Map" && navigation.state.index === 0) {
						var isActivated = true;
						var tabStyle = styles.tabLeftActivated;
					} else if (route.key === "List" && navigation.state.index === 1) {
						var isActivated = true;
						var tabStyle = styles.tabRightActivated;
					} else {
						var isActivated = false;
						var tabStyle = styles.tab;
					}
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate(route.routeName)}
							style={tabStyle}
							key={route.routeName}>
							<Text style={(isActivated) ? styles.tabTextActivated : styles.tabText}>{route.routeName}</Text>
						</TouchableOpacity>
					);
				})}
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
     		screen: MapScreenContainer,
      		path: 'Map',
    	},
		List: {
			screen: ListScreenContainer,
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
		marginTop: 20,
		height: 30,
		position: 'absolute',
		top: 10,
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
	tabText: {
		lineHeight: 20,
		color: "#ff5a72",
		fontFamily: 'lato-regular'
	},
	tabLeftActivated: {
		flex: 0,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#ff5a72",
		borderBottomLeftRadius: 20,
		borderTopLeftRadius: 20
	},
	tabRightActivated: {
		flex: 0,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#ff5a72",
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20
	},  
	tabTextActivated: {
		lineHeight: 20,
		color: "white",
		fontFamily: 'lato-regular'

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
