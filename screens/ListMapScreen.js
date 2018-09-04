import React from 'react';
import { MapView } from "expo";

import { StyleSheet } from 'react-native';

export default class ListMapScreen extends React.Component {
  static navigationOptions = {
    title: 'ListMap'
  };

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
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});