import React, { Component } from 'react';
import { View, Text, NetInfo } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { drawerScreenNavigationOptions, stackScreenOptions, drawerStackNavigationOptions, drawerContentComponents } from './config';

import {
    WelcomeScreen,
    LoginScreen,
    ForgotPasswordScreen,
    RegisterScreen,
    LogoutScreen,
    ProfileScreen,
    ContactUsScreen,

    TimelineScreen,
    PostsScreen,
    ChatScreen,
} from '../modules';

export default class MainNavigation extends Component {
    state = { online: true };

    componentDidMount() {
        NetInfo.isConnected.fetch()
            .then(isConnected => this.setState({ online: isConnected }));

        NetInfo.isConnected.addEventListener(
            'connectionChange', isConnected => this.setState({ online: isConnected })
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'connectionChange', isConnected => this.setState({ online: isConnected })
        );
    }

    render() {
        const RootNavigation = createStackNavigator({
            WelcomeScreen,
            LoginScreen,
            ForgotPasswordScreen,
            RegisterScreen,
            LogoutScreen,
            Main: createBottomTabNavigator({
                TimelineScreen,
                PostsScreen,
                ChatScreen,
            }, {

            }),
            ProfileScreen,
            ContactUsScreen,
        }, {
            headerMode: 'none',
            initialRouteName: "WelcomeScreen",
            navigationOptions: {
                gesturesEnabled: false,
            }
        });

        return (
            this.state.online

                ? <RootNavigation />

                : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, color: Colors.white }}>Oops!</Text>
                    <Text style={{ textAlign: 'center', color: Colors.white, fontSize: 18 }}>There seems to be a problem with your internet connection</Text>
                </View>
        );
    }
}