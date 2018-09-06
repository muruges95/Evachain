import { createBottomTabNavigator } from 'react-navigation';

import DashboardScreen from "./screens/DashboardScreen";
import ListMapScreen from "./screens/ListMapScreen";
import ProfileScreen from "./screens/ProfileScreen";


export default createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    ListMap: ListMapScreen,
    Profile: ProfileScreen
  }
);

