import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
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
import DashboardScreenContainer from './containers/DashboardScreenContainer';


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
                marginLeft: 10,
                elevation: 0,
                shadowOpacity: 0,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                    width:0
                },
            },
            headerTintColor: '#919191',
        }
    }
);

export const MainApp = createBottomTabNavigator(
    {
        Dashboard: {screen: DashboardScreenContainer },
        ListMap: { screen: ListMapScreen },
        Profile: { screen: ProfileScreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Dashboard') {
                    iconName = `home${focused ? '': ''}`;
                } else if (routeName === 'ListMap') {
                    iconName = `map${focused ? '': ''}`;
                } else if (routeName === 'Profile') {
                    iconName = `user${focused ? '': ''}`;
                }

                return <SimpleLineIcons name={iconName} size={20} color={tintColor} />;
                },
        }),
        tabBarOptions: {
            activeTintColor: '#FF5A72',
            inactiveTintColor: '#484848',
        },
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
