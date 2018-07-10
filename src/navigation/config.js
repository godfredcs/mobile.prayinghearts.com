import React from 'react';

import Colors from '../constants/Colors';

export const bottomScreenNavigationOptions = (title, IconFamily, iconName) => ({
    title,
    tabBarLabel: title,
    tabBarIcon: ({tintColor}) => <IconFamily name={iconName} size={24} color={tintColor} />
});

export const bottomStackNavigationOptions = (title) => ({
    title,
    headerTitle: title,
    headerTitleStyle: {
        color: '#FFF'
    },
    headerStyle: {
        backgroundColor: Colors.secondary
    }
});