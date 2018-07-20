import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => (
    <View style={styles.container}>
        <Text>Praying Hearts</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    }
});