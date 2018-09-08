import React, {Component} from 'react';
import { Text, StyleSheet, View } from "react-native";



export default class ProfileScreen extends React.Component {
	render() {
		return (
			<View>
				<Text style={styles.black}> Name here</Text>
				<Text style={styles.red}>View and edit profile</Text>
				<Text style={styles.black}> Location Settings</Text>
				<Text style={styles.black}> Notifications</Text>
				<Text style={styles.black}> FAQ </Text>
				<Text style={styles.black}> Give us feedback </Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  black: {
    color: 'black',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontSize: 15
  },
});

