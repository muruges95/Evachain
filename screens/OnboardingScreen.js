import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageStore,
    Picker
} from "react-native";
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';
import { Permissions, ImagePicker, Camera } from 'expo';
import { postData } from "../api/db";
import { AsyncStorage } from "react-native";
import json from "../keys.json";
import Geocode from "react-geocode";
import { Dropdown } from 'react-native-material-dropdown';
Geocode.setApiKey(json.geocodeAPI);

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
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
    }
    handleSave = () => {
        //this.props.save(this.state);
        this.props.navigation.navigate('OnboardingDetail', {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
    }
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 1 of 5</Text>
                    <Text style={onboardingStyle.largeText}> What's your name?</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        FIRST NAME</FormLabel>
                    <FormInput
                        onChangeText={e=>{ this.setState({firstName: e}); }}
                    />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        LAST NAME</FormLabel>
                    <FormInput
                        onChangeText={e=>{ this.setState({lastName: e}); }}
                    />
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
                        onPress={() => {
                            this.handleSave();
                        }}
                    />
                </View>
            </View>
        )
    }
}

export class OnboardingDetailScreen extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;

        this.state = {
            firstName: navigation.getParam('firstName', ''),
            lastName: navigation.getParam('lastName', ''),
            address: "",
            phone: ""
        };
        console.log(this.state);
    }
    handleSave = () => {
        //this.props.save(this.state);
        this.props.navigation.navigate('OnboardingHousehold', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone
        });
    }
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 2 of 5</Text>
                    <Text style={onboardingStyle.largeText}>Your address & number?</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        HOUSE ADDRESS</FormLabel>
                    <FormInput
                        onChangeText={e=>{ this.setState({address: e}); }}
                    />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        MOBILE PHONE
                    </FormLabel>
                    <FormInput
                        onChangeText={e=>{ this.setState({phone: e}); }}
                    />
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
                        onPress={this.handleSave}
                    />
                </View>
            </View>
        )
    }
}

export class OnboardingHouseholdScreen extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;

        this.state = {
            firstName: navigation.getParam('firstName', ''),
            lastName: navigation.getParam('lastName', ''),
            address: navigation.getParam('address', ''),
            phone: navigation.getParam('phone', ''),
            pets: true,
            familyMembers: 0,
            mobilityIssues: true,

        };
        console.log(this.state);
    }
    handleSave = () => {
        //this.props.save(this.state);
        this.props.navigation.navigate('OnboardingVolunteer', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            pets: this.state.pets,
            familyMembers: this.state.familyMembers,
            mobilityIssues: this.mobilityIssues,

        });
    }
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 3 of 5</Text>
                    <Text style={onboardingStyle.largeText}>And, some household details.</Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        DO YOU HAVE PETS?</FormLabel>
                    <Picker
                        selectedValue={this.state.pets}
                        style={{ height: 40, width: "96%", marginLeft: "4%" }}
                        onValueChange={(itemValue, itemIndex) => {
                            console.log(itemValue, itemIndex);
                            this.setState({pets: itemValue});
                        }}>
                        <Picker.Item label="Yes" value={true} />
                        <Picker.Item label="No" value={false} />
                    </Picker>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        NO. OF FAMILY MEMBERS
                    </FormLabel>
                    <Picker
                        selectedValue={this.state.familyMembers}
                        style={{ height: 40, width: "96%", marginLeft: "4%" }}
                        onValueChange={(itemValue, itemIndex) => this.setState({familyMembers: itemValue})}>
                        <Picker.Item label="0" value={0} />
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="6" value={6} />
                        <Picker.Item label="7" value={7} />
                        <Picker.Item label="8" value={8} />
                        <Picker.Item label="9" value={9} />
                        <Picker.Item label="10" value={10} />
                    </Picker>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        DO YOU HAVE MOBILITY ISSUES?
                    </FormLabel>
                    <Picker
                        selectedValue={this.state.mobilityIssues}
                        style={{ height: 40, width: "96%", marginLeft: "4%" }}
                        onValueChange={(itemValue, itemIndex) => this.setState({mobilityIssues: itemValue})}>
                        <Picker.Item label="Yes" value={true} />
                        <Picker.Item label="No" value={false} />
                    </Picker>
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
                        onPress={this.handleSave}
                    />
                </View>
            </View>
        )
    }
}
export class OnboardingVolunteer extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;

        this.state = {
            firstName: navigation.getParam('firstName', ''),
            lastName: navigation.getParam('lastName', ''),
            address: navigation.getParam('address', ''),
            phone: navigation.getParam('phone', ''),
            pets: navigation.getParam('pets', ''),
            familyMembers: navigation.getParam('familyMembers', ''),
            mobilityIssues: navigation.getParam('mobilityIssues', '')
        };
        console.log(this.state);
    }
    handleSave = () => {
        //this.props.save(this.state);
        this.props.navigation.navigate('OnboardingImage', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phone: this.state.phone,
            pets: this.state.pets,
            familyMembers: this.state.familyMembers,
            mobilityIssues: this.mobilityIssues,
            volunteer: true
        });
    }
    render() {
        return (
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 4 of 5</Text>
                    <Text style={onboardingStyle.largeText}>Sign up to be a volunteer.</Text>
                </View>
                <View style={{alignItems:"center",paddingLeft: 30,
                    paddingTop: 25,paddingRight: 30,
                }}>
                    <Text>
                        The resources of firemen are stretched thin during a massive fire. When folks like yourself are
                        unable to respond or have mobility issues, our boys in yellow go door to door to verify our civilians are safe.
                    </Text>
                </View>
                <View style={{
                    alignItems:"center",
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 25,
                }}>
                    <Text>
                        Sign up to alleviate their pain. Lend them a helping hand!
                    </Text>
                </View>
                <View style={onboardingStyle.formContainer}>
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        DO YOU WANT TO BE A VOLUNTEER?</FormLabel>
                    <Picker
                        selectedValue={this.state.pets}
                        style={{ height: 40, width: "96%", marginLeft: "4%" }}
                        onValueChange={(itemValue, itemIndex) => this.setState({pets: itemValue})}>
                        <Picker.Item label="Yes" value={true} />
                        <Picker.Item label="No" value={false} />
                    </Picker>
                </View>
                <View style={onboardingStyle.buttonContainer}>
                    <Icon
                        component={TouchableOpacity}
                        raised
                        name="chevron-right"
                        color="white"
                        containerStyle={{ backgroundColor: '#FF5A72', height:50, width:50, marginTop:30 }}
                        onPress={this.handleSave}
                    />
                </View>
            </View>
        )
    }
}
export class OnboardingImageScreen extends React.Component {
    constructor(props){
        super(props);
        const { navigation } = this.props;
        const address = navigation.getParam('address', '')

        this.state = {
            firstName: navigation.getParam('firstName', ''),
            lastName: navigation.getParam('lastName', ''),
            address: address,
            phone: navigation.getParam('phone', ''),
            pets: navigation.getParam('pets', ''),
            familyMembers: navigation.getParam('familyMembers', ''),
            mobilityIssues: navigation.getParam('familyMembers', ''),
            volunteer: navigation.getParam('volunteer', ''),
            image: null,
            imageURI: null,
            status: "unverified"
        };
        console.log(this.state);
    }
    handleSave = () => {
        Geocode.fromAddress(this.state.address).then(
            response => {
                // console.log(response);
                // console.log(this.state.address);
                const { lat, lng } = response.results[0].geometry.location;
                // console.log(lat, lng);
                let userInfo = { ...this.state, lat: lat, lng: lng};
                // console.log(userInfo);
                this._storeData(userInfo);
                postData(userInfo, 'civilians');
            },
            error => {
                console.error(error);
            }
        );
    }
    _storeData = async (userInfo) => {
        AsyncStorage.setItem("state", JSON.stringify(userInfo))
            .then(success=>{
                console.log("Onboarding: Write Data Success!",success);
                this.props.navigation.navigate('Main', userInfo)
            })
            .catch(fail =>console.log("Onboarding: Write Data Fail!",fail));
    }
    saveImage = (uri) => {
        console.log('URI', uri);
        ImageStore.getBase64ForTag(uri, (data) => {
            this.setState({image: data, imageURI: uri});
        }, e => console.warn("getBase64ForTag: ", e))
        console.log(this.state);
    }
    render() {
        return(
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 5 of 5</Text>
                    <Text style={onboardingStyle.largeText}>Add your profile picture.</Text>
                </View>
                <View style={{flex:5}}>
                    <ProfileImagePicker
                        saveImage={this.saveImage}
                    />
                </View>

                <View style={{flex:2,alignItems: 'center', justifyContent:'center'}}>
                    <Button
                        title="Proceed"
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
                        onPress={this.handleSave}
                        disabled={false}
                    />
                </View>
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
    constructor(props) {
        super(props);
        this.state = {
            hasImagePermission: null,
            image: null
        };
    }

    render() {
        let{ image } = this.state;
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
                {image ?
                    <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
                    :
                    null
                }
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


            </View>
        );
    }
    saveImage = (uri) => {
        this.props.saveImage(uri);
    }
    _pickImage = async() => {
        const permissions = 'Permissions.CAMERA_ROLL';
        let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
                console.log(status);
            if (!result.cancelled) {
                this.setState({ image: result.uri });
                this.saveImage(result.uri);
            }
        }
    }

    _cameraImage = async() => {
        const permissions = 'Permissions.CAMERA';
        let { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log(permissions, { error }));
            console.log(result);
        }
    }
}

