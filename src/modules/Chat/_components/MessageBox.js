import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

export default () => (
    <View style={styles.container}>
        <TextInput
            multiline
            underlineColorAndroid='transparent'
            style={styles.textInput}
        />

        <TouchableOpacity style={styles.sendButton} onPress={() => console.log('this is it')}>
            <MaterialIcons name="send" color={Colors.secondary} size={24} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#EEE'
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 10,
        width: '100%',
        maxHeight: 80,
        flex: 1
    },
    sendButton: {
        paddingLeft: 20
    }
});