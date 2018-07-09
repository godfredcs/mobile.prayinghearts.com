import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

class PostsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the PostsScreen</Text>
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

export default PostsScreen;