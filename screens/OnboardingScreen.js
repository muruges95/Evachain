import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';
import { Permissions, ImagePicker, Camera } from 'expo';

const onboardingStyle = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
    },
    headerContainer: {
        paddingLeft: 30,
        paddingTop: 25,
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
    buttonContainer: {
        alignItems: 'flex-end',
        paddingRight: 20
    },
    skipText: {
        fontFamily: 'lato-bold',
        color: '#FF5A72',
        marginTop: 15
    }
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
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
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
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
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
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
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
                <ProfileImagePicker />
            </View>
        )
    }
}

export class LocationPermissionScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>HELLO</Text>
            </View>
        )
    }
}

export class ProfileImagePicker extends React.Component {
    state = {
        hasImagePermission: null,
    }

    render() {
        let{ image } = this.state;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                <Button
                    title="Choose Photo"
                    color="#FFF"
                    textStyle={{
                        fontFamily: 'lato-bold',
                        fontSize: 15
                    }}
                    buttonStyle={{
                        backgroundColor: '#FF5A72',
                        width: 250,
                        height: 50,
                        borderRadius:  60,
                    }}
                    onPress={this._pickImage}
                />
                <Button
                    title="Take Photo"
                    color="#FF5A72"
                    textStyle={{
                        fontFamily: 'lato-bold',
                        fontSize: 15
                    }}
                    buttonStyle={{
                        backgroundColor: '#FFF',
                        width: 250,
                        height: 50,
                        borderRadius: 60,
                        borderWidth: 1,
                        borderColor: '#FF5A72',
                        marginTop: 10
                    }}
                    onPress={this._cameraImage}
                />

                <Text
                    style={onboardingStyle.skipText}
                    onPress={() => this.props.navigation.navigate('LocationPermission')}
                    >Skip</Text>
            </View>
        );
    }

    _pickImage = async() => {
        const permissions = 'Permissions.CAMERA_ROLL';
        let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            console.log(status);

            }
        }

    _cameraImage = async() => {
        const permissions = 'Permissions.CAMERA';
        let { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));

            }
        }
}

