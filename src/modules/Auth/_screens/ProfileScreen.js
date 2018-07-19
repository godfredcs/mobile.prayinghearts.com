import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the profile screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProfileScreen;