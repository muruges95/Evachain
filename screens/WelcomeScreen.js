import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions, AsyncStorage
} from "react-native";

import { Button } from 'react-native-elements';

const welcomeStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%'

    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    mainText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
        marginTop: -60,
        color: '#484848',
        fontFamily: 'lato-black'
    },
    smallText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        color: '#919191',
        fontFamily: 'lato-regular'
    },
    Image: {
        width: 60,
        resizeMode: 'contain',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120

    }
})

export default class WelcomeScreen extends React.Component {
    componentDidMount() {
        AsyncStorage.getItem('state')
            .then(e=>{
                console.log("great2",JSON.parse(e));
                this.setState(JSON.parse(e));
                if(this.state.firstName) {
                    this.props.navigation.navigate('Main', this.state);
                }
            })
            .catch(e=>console.log("fuck2",e));
    }
    render() {
        return (
            <View style={welcomeStyle.mainContainer}>
                <View style={welcomeStyle.imageContainer}>
                    <Image style={welcomeStyle.Image} source={require('../assets/logo.png')} />
                    <Text style={welcomeStyle.mainText}>Welcome to Evachain</Text>
                    <Text style={welcomeStyle.smallText}>Evacuation made simple.</Text>
                </View>
                <View style={welcomeStyle.buttonContainer}>
                    <Button
                        color='#FFF'
                        title="Get Started"
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
                        onPress={() => this.props.navigation.navigate('OnboardingName')}
                    />
                </View>
            </View>
        )
    }
}

