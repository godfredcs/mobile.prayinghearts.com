import React, {Component} from 'react';
import {StyleSheet, StatusBar, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';

import {getAllPosts} from '../_store/PostsActions';

import PostCard from '../_components/PostCard';

class TimelineScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
        this.props.getAllPosts();
    }

    renderPosts = () => {
        return this.props.posts.map(post => <PostCard key={post._id} post={post} />)
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderPosts()}
                </ScrollView>
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

const mapStateToProps = state => {
    const {posts} = state.posts;
    console.log('these are the posts ', posts);
    return {posts};
};

export default connect(mapStateToProps, {getAllPosts})(TimelineScreen);