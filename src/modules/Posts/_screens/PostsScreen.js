import React from 'react';
import {StyleSheet, StatusBar, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';

import {getMyPosts} from '../_store/PostsActions';

import PostCard from '../_components/PostCard';
import CreateButton from '../_components/CreateButton';
import CreatePostModal from '../_components/CreatePostModal'

class PostsScreen extends React.Component {
    state = {openCreatePostModal: false};

    componentDidMount() {
        StatusBar.setBarStyle('light-content');
        this.props.getMyPosts();
    }

    renderPosts = () => {
        return this.props.my_posts.map(post => <PostCard key={post._id} post={post} />);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    {this.renderPosts()}
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
    }
});

const mapStateToProps = state => {
    const {my_posts} = state.posts;
    return {my_posts};
};

export default connect(mapStateToProps, {getMyPosts})(PostsScreen);