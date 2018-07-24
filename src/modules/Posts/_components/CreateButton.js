import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Colors from '../../../constants/Colors';
import {Entypo} from '@expo/vector-icons';

export default ({icon}) => (
    <TouchableOpacity style={[styles.container]}>
        <Entypo name="new-message" size={24} color="#FFF" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10
    }
});