import React from 'react';
import {View, StyleSheet} from "react-native";
import { Icon, Button } from 'react-native-elements'

const locater = props => (
	<View style={styles.container}>
		<Button 
			icon={
		    <Icon
		      name="gps-fixed"
		      size={15}
		      color='white'
		    />
		  }
			textStyle={{
			  fontFamily: 'lato-bold',
			  fontSize: 15
			}}
			buttonStyle={{
			  backgroundColor: '#FF5A72',
			  width: 250,
			  height: 50,
			  borderRadius: 60,
			}}
		  title="My Location"
		  onPress={props.onPress}
	  />
	</View>
);

	
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 20,
	  flex: 1
	},
	floatingMenuButtonStyle: {
	    alignSelf: 'center',

	    
	}
})

export default locater