import React from 'react';
import { WebView, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
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
                console.log("Dashboard: Retrieved Data Success!", JSON.parse(e));
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
            "lat": this.state.lat,
            "lng": this.state.lng
        }
        retrieveKey(queryBody, "testdb2")
            .then(data=>{
                this.setState({
                    _id: data.docs[0]._id,
                    _rev: data.docs[0]._rev
                });

                return {
                    ...this.state
                }
            })
            .then(jsonData=>{
                updateRow(this.state._id, jsonData, "testdb2");
            })
            .catch(e=>{
                console.log("Error Patching:", e);
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
                            <Text style={styles.fireAlertText}>A wildfire is blazing near Menlo Park</Text>
                            <Text style={styles.verifySafetyText}>Please confirm your safety. It helps our emergency personnel respond faster.</Text>
                            <TouchableOpacity style={[styles.button,styles.assistance]} onPress={this.verifyAssistance}>
                                <Text style={styles.assistanceText}>I require assistance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button,styles.safe]} onPress={this.verifySafety}>
                                <Text style={styles.safeText}>I am safe</Text>
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
                                    <Text style={styles.headerText}>Hello, {this.state.firstName}</Text>
                                </View>
                                <View
                                    style={[{backgroundColor:'#FF5A72'}, styles.fireCard]}
                                    onPress={this.openModal}
                                >
                                    <Text style={styles.fireText}>
                                    {this.state.fireState == 'pink' ?
                                        "There is a wildfire nearby!"
                                        :
                                        "There are no incidents near you"
                                    }
                                    </Text>
                                    <Text style={styles.fireText}>Your Safety status: {this.state.status}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.exampleContainer,{height: 480}]}>
                            <Text style={styles.shelterText}>News Feed</Text>
                            <View style={styles.mapViewStyle}>
                                <WebView
                                    source={{html: '<a class="twitter-timeline" data-lang="en" data-dnt="true" href="https://twitter.com/CAL_FIRE?ref_src=twsrc%5Etfw">Tweets by CAL_FIRE</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'}}
                                />
                            </View>
                        </View>
                        <View style={styles.exampleContainer}>
                            <Text style={styles.shelterText}>Curated Articles</Text>
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
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF'
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
    },
    wholeHeader: {
        // backgroundColor: "red",
        height: 140,
    },
    headerStyle: {
        marginTop: "15%",
        flexDirection: 'row',
        marginLeft: "8%",
        marginRight: "8%",
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'lato-black',
        color: '#484848'
    },
    shelterText: {
        marginLeft: "10%",
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'lato-black',
        marginBottom: 30,
        marginTop: 75,
        color: '#484848'
    },
    elementsContainer: {
        backgroundColor: '#ecf5fd',
        width:"100%",
    },
    fireCard:{
        marginRight:"8%",
        marginLeft:"8%",
        marginTop:30,
        paddingTop:24,
        paddingBottom:24,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius:10,
        borderWidth: 1,
    },
    fireText: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: 'lato-bold',
        color: '#FFF',
        lineHeight: 18

    },
    mapViewStyle: {
        backgroundColor: "white",
        width:"90%",
        height:400,
        marginLeft:"8%",
        marginRight:"8%",
    },
    modal: {
        marginTop: 150,
        marginBottom: 120,
        marginRight: "6%",
        marginLeft: "6%",
        width: "88%",
        height: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },
    fireAlertText: {
        fontSize: 20,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'lato-black',
        color: '#484848',
        textAlign: "center"
    },
    verifySafetyText: {
        fontSize: 14,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'lato-regular',
        color: '#919191',
        textAlign: 'center'
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
        borderColor: '#FF5A72',
        backgroundColor:'#FFF',
        marginTop: 7,
        marginBottom: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 100,
        borderWidth: 1
    },
    assistance: {
        backgroundColor: "#FF5A72",
        marginTop: 22,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 100,
    },
    safeText: {
        fontFamily: 'lato-regular',
        color: '#FF5A72'
    },
    assistanceText: {
        fontFamily: 'lato-regular',
        color: '#FFF'
    }

}


