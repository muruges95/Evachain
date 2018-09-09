import React from 'react';
import { Button } from 'react-native-elements';
import { Text, View, FlatList } from "react-native";


const ListSeparator = () => (
	<View style={{ borderBottomColor: '#e7e7e8', borderBottomWidth: 1, marginBottom: 5, marginTop: 10 }}/>
);

export default class ListScreen extends React.Component {
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
				<Text style={{ fontSize: 24, marginTop: 25, marginBottom: 15, fontWeight: "bold", textAlign: "center" }}>Nearest Shelters</Text>
				<FlatList
					style={{ marginBottom: 140 }}
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
