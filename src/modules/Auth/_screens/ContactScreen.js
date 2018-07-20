import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class ContactScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the contact us screen</Text>
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

export default ContactScreen;