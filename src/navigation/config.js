import React from 'react';
import {
    TouchableOpacity,
    View,
    ScrollView,
    Text
} from 'react-native';
import { createStackNavigator, DrawerItems } from 'react-navigation';

import Colors from '../constants/Colors';

export const stackScreenOptions = (navigation, title) => {
    if (navigation.state.params && navigation.state.params.title) {
        title = navigation.state.params.title;
    }

    return {
        title,
        headerTitle: title
    }
}

// Function to render navigation options for stackNavigators inside the drawer Navigator.
export const drawerStackNavigationOptions = (navigation, title, IconFamily) => ({
    headerMode: 'float',
    title,
    headerTitle: title,
    headerTitleStyle: {fontSize: 22, color: Colors.tertiary},
    headerStyle: {
        backgroundColor: Colors.accent,
        borderBottomWidth: 0,
    },
    headerLeft: (
        <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.openDrawer()}>
            <IconFamily name="menu" size={24} color={Colors.tertiary} />
        </TouchableOpacity>
    )
});


export const drawerScreenNavigationOptions = (drawerLabel, iconName, IconFamily, size=24) => ({
    drawerLabel,
    drawerLockMode: 'locked-closed',
    drawerIcon: ({ tintColor }) => <IconFamily name={iconName} size={size} color={tintColor} />
});


export const drawerContentComponents = props => (
    <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: Colors.accent, paddingVertical: 50, alignItems: 'center' }}>
            <Text style={{ color: Colors.tertiary, paddingTop: 10, fontSize: 18, fontWeight: '600' }}>
                CHS logo
            </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
            <DrawerItems { ...props } />
        </ScrollView>
    </View>
);