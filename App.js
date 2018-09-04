import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import DashboardScreen from "./screens/DashboardScreen";
import ListMapScreen from "./screens/ListMapScreen";
import ProfileScreen from "./screens/ProfileScreen";


const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen
});

const ListMapStack = createStackNavigator({
  ListMap: ListMapScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

class HomeScreen extends React.Component {
  render() {
    return (
        <MapView
          style={{
            flex: 1
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
    );
  }
}

// export default createBottomTabNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });

export default createBottomTabNavigator({
  DashboardStack,
  ListMapStack,
  ProfileStack
});