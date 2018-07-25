import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';

import CreateButton from '../_components/CreateButton';
import CreatePostModal from '../_components/CreatePostModal'

class PostsScreen extends Component {
    state = {openCreatePostModal: false};

    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Text>This is the PostsScreen</Text>
                </ScrollView>

                <CreateButton onPress={() => this.setState({openCreatePostModal: true})} />

                <CreatePostModal
                    title="Create Post"
                    visible={this.state.openCreatePostModal}
                    close={() => this.setState({openCreatePostModal: false})}
                />
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