import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ChatScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the ChatScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})

export default ChatScreen;