import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from "react-native";
/*import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
*/
const nameStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        paddingLeft: 30,
        paddingTop: 80

    },
    smallText: {
        color: '#FF5A72',
        fontFamily: 'lato-bold',
    },
    largeText: {
        color: '#FF5A72',
        fontFamily: 'lato-black',
        fontSize: 24

    }
})

export default class OnboardingNameScreen extends React.Component {
    render() {
        return (
            <View style={nameStyle.mainContainer}>
                <View>
                    <Text style={nameStyle.smallText}>Step 1 of 4</Text>
                    <Text style={nameStyle.largeText}> What's your name?</Text>
                </View>
                <View>
                </View>
            </View>


        )
    }
}
