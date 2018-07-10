import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';

class PostsScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

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