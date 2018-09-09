import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import InfoCarousel from "../components/InfoCarousel"
import {retrieveData, postData, toJson} from "../api/db.js";
import { Avatar, Button } from 'react-native-elements';
import { MapView } from "expo";
import {colors} from "../styles/index.style";

export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            fireState: "pink",
        };
    }
    getColor = () => {
        return this.state.fireState
    }
    render() {
        const {fireState} = this.state.fireState

        return(
            <View style={styles.safeArea}>
                <View style={styles.safeArea}>
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
                                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                                        onPress={() => console.log("Works!")}
                                        activeOpacity={0.7}
                                    />
                                    <Text style={styles.headerText}>Hello Bro</Text>

                                </View>
                                <Text style={[{backgroundColor:this.getColor()}, styles.fireCard]}>
                                    {this.state.fireState == 'pink' ?
                                        "There is a wildfire nearby! 🔥"
                                        :
                                        "There are no incidents near you ☮"
                                    }️
                                </Text>
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
                            <InfoCarousel />
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
        paddingVertical: 10
    },
    wholeHeader: {
        // backgroundColor: "red",
        height: 140,
    },
    headerStyle: {
        backgroundColor:"white",
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
        fontSize: 16,
        marginRight:"5%",
        marginLeft:"5%",
        marginTop:20,
        paddingTop:24,
        paddingBottom:24,
        textAlign: "center",
        borderColor: 'rgba(0,0,0,0)',
        borderRadius:10,
        borderWidth: 1,

    },

    mapViewStyle: {
        backgroundColor: "white",
        width:"90%",
        height:200,
        marginLeft:"5%",
        marginRight:"5%",
    }
}


