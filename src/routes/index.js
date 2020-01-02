import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../pages/Home';
import Event from '../pages/Event';
import Profile from '../pages/Profile';
import Splash from '../pages/Spash';


const HomeNavigator = createBottomTabNavigator(
    {
        Event: Event ,
        Home: Home,
        Profile: Profile
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Event') {
                    iconName = `ios-reorder`;
                } else if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if (routeName === 'Profile') {
                    iconName = `ios-person`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#252ccc',
            inactiveTintColor: '#17380d',
        },
    }
);

const MainContainer = createSwitchNavigator({
    Splash: Splash,
    HomeNavigator: HomeNavigator
}, {
    initialRouteName: 'Splash',
});

export default createAppContainer(MainContainer);
