import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageStore,
} from "react-native";
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements';
import { Permissions, ImagePicker, Camera } from 'expo';
import { postData } from "../api/db";
import { AsyncStorage } from "react-native"

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
                    <Text style={onboardingStyle.smallText}>Step 1 of 4</Text>
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
                    <Text style={onboardingStyle.smallText}>Step 2 of 4</Text>
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
            pets: "",
            familyMembers: ""
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
            familyMembers: this.state.familyMembers
        });
    }
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
                    <FormInput
                        onChangeText={e=>{ this.setState({pets: e}); }}
                    />
                    <FormLabel
                        labelStyle={{color: '#484848'}}>
                        NO. OF FAMILY MEMBERS
                    </FormLabel>
                    <FormInput
                        onChangeText={e=>{ this.setState({familyMembers: e}); }}
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

export class OnboardingImageScreen extends React.Component {
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
            image: null,
            imageURI: null
        };
        console.log(this.state);
    }
    handleSave = () => {
        console.log(this.state);
        this._storeData();
        // postData(this.state, 'testdb1')
    }
    _storeData = async () => {
        AsyncStorage.setItem("state", JSON.stringify(this.state))
            .then(success=>{
                console.log("Onboarding: Write Data Success!",success);
                this.props.navigation.navigate('Main', this.state)
            })
            .catch(fail=>console.log("Onboarding: Write Data Fail!",fail));
    }
    saveImage = (uri) => {
        console.log('URI', uri);
        ImageStore.getBase64ForTag(uri, (data) => {
            this.setState({image: data});
        }, e => console.warn("getBase64ForTag: ", e))
        console.log(this.state);
    }
    render() {
        return(
            <View style={onboardingStyle.mainContainer}>
                <View style={onboardingStyle.headerContainer}>
                    <Text style={onboardingStyle.smallText}>Step 4 of 4</Text>
                    <Text style={onboardingStyle.largeText}>Add your profile picture.</Text>
                </View>
                <ProfileImagePicker
                    saveImage={this.saveImage}
                />
                <View>
                    <Text
                        style={onboardingStyle.skipText}
                        onPress={() => {
                            this.handleSave();

                        }}
                    >Skip</Text>
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
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
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
                this.setState({ imageURI: result.uri });
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

