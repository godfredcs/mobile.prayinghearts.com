import React, {Component} from 'react';
import {StyleSheet, StatusBar, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';

import PostCard from '../_components/PostCard';

class TimelineScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <PostCard />
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
    return {};
};

export default connect(mapStateToProps, {})(TimelineScreen);