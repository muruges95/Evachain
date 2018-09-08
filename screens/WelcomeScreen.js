import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    Button
} from "react-native";

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
        marginTop: -50,
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
        marginTop: 10
    },
    Button: {
        backgroundColor: '#FF5A72',
        width: 300,
        height: 45,
        borderColor: 'transparent',

    }
})

export default class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={welcomeStyle.mainContainer}>
                <View style={welcomeStyle.imageContainer}>
                    <Image style={welcomeStyle.Image} source={require('../assets/logo.png')} />
                    <Text style={welcomeStyle.mainText}>Welcome to Evachain</Text>
                    <Text style={welcomeStyle.smallText}>Evacuation made simple.</Text>
                </View>
                <View>
                    <Button
                        color='#FF5A72'
                        title="Get Started"
                        onPress={() => this.props.navigation.navigate('OnboardingName')}
                    />
                </View>
            </View>
        )
    }
}

