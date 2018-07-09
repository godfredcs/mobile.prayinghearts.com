import React, { Component } from 'react';
import { View, Text, NetInfo, TouchableOpacity } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import {bottomScreenNavigationOptions} from './config';

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
                TimelineScreen: {
                    screen: TimelineScreen,
                    navigationOptions: bottomScreenNavigationOptions('Timeline', MaterialCommunityIcons, 'chart-timeline')
                },
                PostsScreen: {
                    screen: PostsScreen,
                    navigationOptions: bottomScreenNavigationOptions('Posts', Entypo, 'newsletter')
                },
                ChatScreen: {
                    screen: createStackNavigator({
                        screen: createDrawerNavigator({
                            ChatScreen
                        }, {
                            drawerWidth: 200,
                            drawerPosition: 'right'
                        })
                    }, {
                        headerMode: 'screen',
                        navigationOptions: ({navigation}) => ({
                            title: 'Chat',
                            headerTitle: 'Chat',
                            headerTitleStyle: {
                                color: '#FFF'
                            },
                            headerStyle: {
                                backgroundColor: Colors.secondary
                            },
                            headerRight: <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.toggleDrawer()}>
                                <Entypo name="menu" size={24} color="#FFF" />
                            </TouchableOpacity>
                        })
                    }),
                    navigationOptions: bottomScreenNavigationOptions('Chat', Entypo, 'chat')
                },
            }, {
                tabBarOptions: {
                    activeTintColor: Colors.secondary,
                    labelStyle: {
                        fontSize: 13
                    },
                    style: {
                        backgroundColor: '#FFF'
                    }
                }
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