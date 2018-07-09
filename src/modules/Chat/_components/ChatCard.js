import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text
} from 'react-native';

const {width} = Dimensions.get('window');

export default ({received}) => (
    <View style={[styles.container, {justifyContent: received ? 'flex-start' : 'flex-end'}]}>
        <View style={[styles.inner, {backgroundColor: received ? '#EEE' : '#CCC'}]}>
            <Text>You said we was meeting here at noon?</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10
    },
    inner: {
        maxWidth: width * 0.8,
        backgroundColor: '#CCC',
        padding: 20,
        borderRadius: 30
    }
});