import React, { Component } from 'react';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCj71zkYDMHtC2wjICDyUYluXOz54eKzmw';

const routeRenderer = (props) => {
	const routeList = props.routes.map((route) => {
	  return (
	  	<MapViewDirections
	  		key = {route.destination.latitude}
				apikey={GOOGLE_MAPS_APIKEY}
				origin={route.origin}
				destination={route.destination}
				strokeWidth={2}
				strokeColor={route.strokeColor}
			/>
		)
	});
	return routeList
}

export default routeRenderer;