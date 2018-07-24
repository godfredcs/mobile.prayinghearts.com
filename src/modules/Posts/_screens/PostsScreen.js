import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';

import CreateButton from '../_components/CreateButton';

class PostsScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Text>This is the PostsScreen</Text>
                </ScrollView>
                <CreateButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
})

export default PostsScreen;