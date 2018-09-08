import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';

const onboardingStyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    headerContainer: {
        paddingLeft: 30,
        paddingTop: 30,
        display: 'flex'

    },
    formContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    smallText: {
        color: '#FF5A72',
        fontFamily: 'lato-bold',
        paddingLeft: 2
    },
    largeText: {
        color: '#FF5A72',
        fontFamily: 'lato-black',
        fontSize: 24,
        marginBottom: 20
    },
})

export class OnboardingNameScreen extends React.Component {
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 1 of 4</Text>
                    <Text style={onboardingStyle.largeText}> What's your name?</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        FIRST NAME</FormLabel>
                    <FormInput />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        LAST NAME</FormLabel>
                    <FormInput />
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50 }}
                        onPress={() => this.props.navigation.navigate('OnboardingDetail')}
                    />
                </View>
            </View>
        )
    }
}

export class OnboardingDetailScreen extends React.Component {
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 2 of 4</Text>
                    <Text style={onboardingStyle.largeText}>Your address & number?</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        HOUSE ADDRESS</FormLabel>
                    <FormInput />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        MOBILE PHONE
                    </FormLabel>
                    <FormInput />
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50 }}
                        onPress={() => this.props.navigation.navigate('OnboardingHousehold')}
                    />
                </View>
            </View>
        )
    }
}

export class OnboardingHouseholdScreen extends React.Component {
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 3 of 4</Text>
                    <Text style={onboardingStyle.largeText}>And, some household details.</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        DO YOU HAVE PETS?</FormLabel>
                    <FormInput />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        NO. OF FAMILY MEMBERS
                    </FormLabel>
                    <FormInput />
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50 }}
                        onPress={() => this.props.navigation.navigate('OnboardingImage')}
                    />
                </View>
            </View>
        )
    }
}

export class OnboardingImageScreen extends React.Component {
    render() {
        return(
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 4 of 4</Text>
                    <Text style={onboardingStyle.largeText}>Add your profile picture.</Text>
                </View>
            </View>


        )
    }

}
