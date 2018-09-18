import React from 'react';
import { AppLoading, Font } from 'expo';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { AsyncStorage } from "react-native"
import store from './store';
import { Provider } from 'react-redux';
import { Store, Dispatch } from 'redux';


import DashboardScreen from "./screens/DashboardScreen";
import ListMapScreen from "./screens/ListMapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import {
    OnboardingNameScreen,
    OnboardingDetailScreen,
    OnboardingHouseholdScreen,
    OnboardingVolunteer,
    OnboardingImageScreen,
    LocationPermissionScreen  } from "./screens/OnboardingScreen";


export const Onboarding = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        OnboardingName: OnboardingNameScreen,
        OnboardingDetail: OnboardingDetailScreen,
        OnboardingHousehold: OnboardingHouseholdScreen,
        OnboardingVolunteer: OnboardingVolunteer,
        OnboardingImage: OnboardingImageScreen,
        LocationPermission: LocationPermissionScreen
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                marginLeft: 10
            },
            headerTintColor: '#919191',
        }
    }
);

export const MainApp = createBottomTabNavigator(
    {
        Dashboard: DashboardScreen,
        ListMap: ListMapScreen,
        Profile: ProfileScreen
    }
);

export const RootStack = createStackNavigator(
    {
        Onboarding: Onboarding,
        Main: MainApp
    },
    {
        initialRouteName: 'Onboarding',
        navigationOptions: {
            header: null,
        }
    }
);

export default class App extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            fontLoaded: false
        }
    }
    async componentWillMount() {
        await Font.loadAsync({
            'lato-bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
            'lato-black': require('./assets/fonts/Lato/Lato-Black.ttf'),
            'lato-regular': require('./assets/fonts/Lato/Lato-Regular.ttf')
        })
        this.setState({ fontLoaded: true });
    }
    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        return (
            <Provider store={store}>
                <RootStack />
            </Provider>
        );
    }
}
