import React from 'react';
import {TextInput} from 'react-native';
import Colors from '../constants/Colors';

export default ({editable=true, style, value="", placeholder="", numberOfLines=5, onChangeText, onEndEditing}) => (
    <TextInput
        multiline
        autoCorrect
        editable={editable}
        autoCapitalize="sentences"
        numberOfLines={numberOfLines}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        clearButtonMode="while-editing"
        style={[styles.textInput, style]}
    />
);

const styles = {
    textInput: {
        padding: 5,
        backgroundColor: 'transparent',
        width: '100%',
        borderColor: Colors.secondary,
        borderWidth: 1,
        marginBottom: 20,
        height: 100
    }
};
