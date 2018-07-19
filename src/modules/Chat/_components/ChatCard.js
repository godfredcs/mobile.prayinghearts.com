import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';

const {width} = Dimensions.get('window');

export default ({message, received}) => (
    <View style={[styles.container, {justifyContent: received ? 'flex-start' : 'flex-end', borderBottomLeftRadius: received ? 0 : 10, borderBottomRightRadius: !received ? 0 : 10}]}>
        <View style={[styles.inner, {backgroundColor: received ? '#EEE' : '#CCC'}]}>
            <Text>{message ? message : 'You said we was meeting here at noon?'}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 10
    },
    inner: {
        maxWidth: width * 0.8,
        backgroundColor: '#CCC',
        padding: 10,
        borderRadius: 10
    }
});