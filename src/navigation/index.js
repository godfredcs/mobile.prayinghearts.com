import React, { Component } from 'react';
import { View, Text, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import {bottomScreenNavigationOptions, bottomStackNavigationOptions} from './config';

import {getSocketId} from '../modules/Chat/_store/ChatActions';

import {
    WelcomeScreen,
    LoginScreen,
    ForgotPasswordScreen,
    RegisterScreen,
    LogoutScreen,
    ProfileScreen,
    ContactScreen,
    AboutScreen,

    MoreScreen,

    TimelineScreen,
    PostsScreen,
    ChatScreen,
    ChatListScreen
} from '../modules';

class MainNavigation extends Component {
    state = { online: true };

    componentDidMount() {
        this.props.getSocketId();

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
                    screen: createStackNavigator({
                        TimelineScreen: {screen: TimelineScreen}
                    }, {
                        navigationOptions: bottomStackNavigationOptions('Timeline')
                    }),
                    navigationOptions: bottomScreenNavigationOptions('Timeline', MaterialCommunityIcons, 'chart-timeline')
                },
                PostsScreen: {
                    screen: createStackNavigator({
                        PostsScreen: {screen: PostsScreen}
                    }, {
                        headerMode: 'screen',
                        navigationOptions: bottomStackNavigationOptions('Posts')
                    }),
                    navigationOptions: bottomScreenNavigationOptions('Posts', Entypo, 'newsletter')
                },
                ChatScreen: {
                    screen: createStackNavigator({
                        ChatListScreen: {screen: ChatListScreen},
                        ChatScreen: {
                            screen: ChatScreen,
                            navigationOptions: ({navigation}) => ({
                                title: navigation.state.params.name,
                                headerTitle: navigation.state.params.name
                            })
                        }
                    }, {
                        headerMode: 'screen',
                        navigationOptions: bottomStackNavigationOptions('Chat')
                    }),
                    navigationOptions: bottomScreenNavigationOptions('Chat', Entypo, 'chat')
                },
                More: {
                    screen: createStackNavigator({
                        MoreScreen,
                        ProfileScreen: {
                            screen: ProfileScreen,
                            navigationOptions: ({navigation}) => ({
                                title: navigation.state.params.title,
                                headerTitle: navigation.state.params.title
                            })
                        },
                        ContactScreen: {
                            screen: ContactScreen,
                            navigationOptions: ({navigation}) => ({
                                title: navigation.state.params.title,
                                headerTitle: navigation.state.params.title
                            })
                        },
                        AboutScreen: {
                            screen: AboutScreen,
                            navigationOptions: ({navigation}) => ({
                                title: navigation.state.params.title,
                                headerTitle: navigation.state.params.title
                            })
                        }
                    }, {
                        headerMode: 'screen',
                        navigationOptions: bottomStackNavigationOptions('More')
                    }),
                    navigationOptions: bottomScreenNavigationOptions('More', MaterialIcons, 'more-horiz')
                }
            }, {
                tabBarOptions: {
                    activeTintColor: Colors.secondary,
                    labelStyle: {
                        fontSize: 14
                    },
                    style: {
                        backgroundColor: '#FFF'
                    }
                }
            })
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

export default connect(null, {getSocketId})(MainNavigation);