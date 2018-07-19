import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/Colors';

export default ({placeholder, secureTextEntry, onChangeText}) => (
    <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.container}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
    />
);

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: Colors.secondary
    }
});