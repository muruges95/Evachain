import React from 'react';
import { AppLoading, Font } from 'expo';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import DashboardScreen from "./screens/DashboardScreen";
import ListMapScreen from "./screens/ListMapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import OnboardingNameScreen from "./screens/OnboardingNameScreen";

export const Onboarding = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        OnboardingName: OnboardingNameScreen,
    },
    {
        navigationOptions: {
            header: null,
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
    state = {
        fontLoaded: false
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
        return <RootStack />;
    }
}
