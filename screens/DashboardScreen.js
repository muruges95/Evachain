import React from 'react';
import { Text, View } from "react-native";
import {retrieveData, postData, toJson} from "../api/db.js";

export default class DashboardScreen extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	        data: null
        };
    }
	componentDidMount() {
		// var wtv = retrieveData('testDB1');
		// this.setState({data: wtv});
		// console.log(this.state.data);
	}
	getFromDB = () => {
        retrieveData('testdb1').then(response => {
            // console.log("Response: ",response);
            this.setState({data: response});
            return response;

        });
        console.log("data",toJson(this.state.data, ["age","gender","height","name"]));
    }
	postToDB = () => {
        const someShit = {
            name: "weihao",
            age: 20,
            gender: "Male",
            height: 100

        };
        postData(someShit, 'testdb1');
    }

	render() {

	    return (
			<View>
				<Text>Dashboard here.</Text>
                <Text>{this.state.data? this.state.data.toString():"Haven't load"}</Text>
                <Text onPress={this.getFromDB}>Get Data</Text>
                <Text>Dashboard here.</Text>
                <Text>Dashboard here.</Text>
                <Text>Dashboard here.</Text>
                <Text>Dashboard here.</Text>
                <Text onPress={this.postToDB}>Post Data</Text>
			</View>
		)
	}
}