import React from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import InfoCarousel from "../components/InfoCarousel"
import { Avatar } from 'react-native-elements';
import { MapView } from "expo";
import { AsyncStorage } from "react-native"
import { retrieveKey, updateRow } from "../api/db.js"
import Modal from "react-native-modal";

export default class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fireState: "pink",
            showModal: true,
        };
    }
    componentDidMount(){
        this._retrieveData();
    }
    getColor = () => {
        return this.state.fireState
    }
    _retrieveData = () => {
        AsyncStorage.getItem('state')
            .then(e=>{
                console.log("Dashboard: Retrieved Data Success!");
                this.setState(JSON.parse(e))
            })
            .catch(e=>console.log("Dashboard: Retrieved Data Fail!",e))
    }
    change = () => {
        console.log("Fire State changed");
        this.setState({fireState: this.state.fireState=='pink'? 'green':'pink'});
    }
    patchDB = () => {
        var queryBody = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "address": this.state.address,
            "phone": this.state.phone,
            "pets": this.state.pets,
        }
        retrieveKey(queryBody, "testdb2")
            .then(data=>{
                this.setState({
                    _id: data.docs[0]._id,
                    _rev: data.docs[0]._rev
                });
                return {
                    status: this.state.status,
                    _id: data.docs[0]["_id"],
                    _rev: data.docs[0]["_rev"],
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    address: this.state.address,
                    phone: this.state.phone,
                    pets: this.state.pets,
                    familyMembers: this.state.familyMembers,
                    image: this.state.image,
                    imageURI: this.state.imageURI
                }
            })
            .then(jsonData=>{
                updateRow(this.state._id, jsonData, "testdb2");
            })
            .catch(e=>{
                console.log("Error:", e);
            });

    }
    modalHide = () => {
        this.setState({showModal: false})
    }
    verifySafety = () => {
        console.log("lmao");
        this.setState({status: "verified"});
        this.writeToState();
        this.closeModal();
    }
    verifyAssistance = () => {
        console.log("lmao");
        this.setState({status: "need assistance"});
        this.writeToState();
        this.closeModal();
    }
    writeToState = () => {
        AsyncStorage.setItem("state", JSON.stringify(this.state))
            .then(success=>{
                console.log("Onboarding: Write Data Success!",success);
            })
            .catch(fail =>console.log("Onboarding: Write Data Fail!",fail));
    }
    openModal = () => {
        this.setState({showModal: true});
    }
    closeModal = () => {
        this.setState({showModal: false});
        this.patchDB();
    }
    render() {
        const {fireState} = this.state.fireState

        return(
            <View style={styles.safeArea}>
                <View style={styles.safeArea}>
                    <Modal
                        style={styles.modal}
                        isVisible={this.state.showModal}
                        onBackdropPress	={this.modalHide}
                        onBackButtonPress={this.modalHide}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={styles.fireAlert}>Fire Alert!</Text>
                            <Text style={styles.fireAlert}>Verify your safety</Text>
                            <TouchableOpacity style={[styles.button,styles.safe]} onPress={this.verifySafety}>
                                <Text>Verify myself as safe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button,styles.assistance]} onPress={this.verifyAssistance}>
                                <Text>I require assistance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={this.closeModal}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <ScrollView
                        style={styles.scrollView}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        <View style={styles.exampleContainer}>
                            <View style={styles.wholeHeader}>
                                <View style={styles.headerStyle}>
                                    <Avatar
                                        small
                                        rounded
                                        source={{uri: "data:text/plain;base64," + this.state.image}}
                                        onPress={() => console.log("Works!")}
                                        activeOpacity={0.7}
                                    />
                                    <Text style={styles.headerText}>Hello {this.state.lastName}</Text>

                                </View>
                                <View
                                    style={[{backgroundColor:this.getColor()}, styles.fireCard]}
                                    onPress={this.openModal}
                                >
                                    <Text style={styles.fireText}>
                                    {this.state.fireState == 'pink' ?
                                        "There is a wildfire nearby! 🔥"
                                        :
                                        "There are no incidents near you ☮"
                                    }
                                    </Text>
                                    <Text style={styles.fireText}>Your Safety status: {this.state.status}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.exampleContainer}>
                            <Text style={styles.shelterText}>Your shelter</Text>
                            <View style={styles.mapViewStyle}>
                                <MapView
                                    style={{
                                        flex: 1
                                    }}
                                    initialRegion={{
                                        latitude: 37.3318456,
                                        longitude: -122.0296002,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421

                                    }}
                                    showsUserLocation={true}
                                    showsMyLocationButton={true}
                                    zoomEnabled={false}
                                    scrollEnabled={false}
                                    rotateEnabled={false}
                                >

                                </MapView>
                            </View>
                        </View>
                        <View style={styles.exampleContainer}>
                            <Text style={styles.shelterText}>Important information</Text>
                            <InfoCarousel
                                emergencyState={this.state.fireState == 'pink'}
                            />
                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = {
    safeArea: {
        flex: 1,
        // backgroundColor: colors.black
    },
    container: {
        flex: 1,
        // backgroundColor: colors.background1
    },
    scrollView: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 20
    },
    wholeHeader: {
        // backgroundColor: "red",
        height: 140,
    },
    headerStyle: {
        marginTop: "5%",
        flexDirection: 'row',
        marginLeft: "5%",
        marginRight: "5%",
    },
    headerText: {
        marginLeft: "5%",
        fontSize: 18,
        fontWeight: 'bold',
    },
    shelterText: {
        marginLeft: "5%",
        fontSize: 18,
        fontWeight: 'bold',
    },
    elementsContainer: {
        backgroundColor: '#ecf5fd',
        width:"100%",
    },
    fireCard:{
        marginRight:"5%",
        marginLeft:"5%",
        marginTop:20,
        paddingTop:24,
        paddingBottom:24,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius:10,
        borderWidth: 1,
    },
    fireText: {
        fontSize: 16,
        textAlign: "center",

    },
    mapViewStyle: {
        backgroundColor: "white",
        width:"90%",
        height:200,
        marginLeft:"5%",
        marginRight:"5%",
    },
    modal: {
        marginTop: 150,
        marginBottom: 150,
        marginRight: "6%",
        marginLeft: "6%",
        width: "88%",
        height: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
    fireAlert: {
        fontSize: 30,
        margin: 5,
        textAlign: "center"
    },
    button: {
        margin: 3,
        borderRadius: 20,
        marginLeft: "10%",
        width: "80%",
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 12
    },
    safe: {
        backgroundColor: "green",
    },
    assistance: {
        backgroundColor: "red",
    }
}


