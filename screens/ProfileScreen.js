import React, {Component} from 'react';
import { Text, StyleSheet, SafeAreaView, View } from "react-native";
import { Icon } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { Avatar} from 'react-native-elements';

const list = [
				{ 
					title: 'Location Settings',
				  	icon: 'location',
				  	source: 'evilicon',
				  	size: 25
				},
				{
					title: 'Notifications',
					icon: 'bell',
					source: 'evilicon',
					size: 25,
				},
				{	
					title: 'FAQ',
					icon: 'question',
					source:'evilicon',
					size: 25
				},
				{	
					title:'Give us feedback',
					icon: 'feedback',
					source: 'MaterialIcons',
					size: 22
				    
				},
			];
let styles = StyleSheet.create({
  	container: {
		flex: 1,
	 	flexDirection: 'row'
	},
	viewStyleOne: {
	    
	    justifyContent: 'center',
	    alignItems:'center', 
	    paddingLeft:10
	},

  	viewStyleTwo: {
	  	height: 30,
	  	flex: 1,
	  	padding:0,

	     
	},
 	textStyle:{
		textAlign:'center',
  	},
  	textStyle2:{
  		paddingTop: 50,
  		textAlign:"left",
  		color: "white",

	},
	listStuff: {
	 	flex:4,
	 }
})
export default class ProfileScreen extends React.Component {
	render() {
		return (
		<SafeAreaView style={{flex:1}}>
			<View style={styles.container}> 
	  			<View style={styles.viewStyleOne}>
		  			<Avatar
		  				large
		  				rounded
					  	source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
					  	onPress={() => console.log("Works!")}
					  	activeOpacity={0.7}	
					/>
	 			</View>
	 			<View style={{flex:3,flexDirection: "column"}}>
	 				<View style={{flex:1,padding:10}}>
						<View style={styles.viewStyleTwo}>
						    <Text style={{fontSize:30,paddingTop:30}}>Ingrid B Maddison </Text>
						    <Text style={{color:'red'}}>View and Edit profile </Text>

					  	</View>
					  	
					</View>  
				</View>

	 		</View>
	 		
		  	<View style={styles.listStuff}>

					{list.map((item,i) => (
						<ListItem
							key={i}
							title={item.title}
							leftIcon={{ 
								name: item.icon,
								type: item.source,
								size: item.size, }}
							titleStyle={{
								padding:20,

							}}
							topDivider={false}
							bottomDivider={false}
						/>
					))}	
			</View>
			</SafeAreaView>
		);
	}
}




