import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import moment from 'moment';

class PostCard extends React.Component {

    renderTime = () => moment(this.props.post.updatedAt).fromNow();

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', padding: 10}}>
                    <Text style={{color: '#777', fontSize: 12}}>by: {this.props.post.user.username}</Text>
                    <Text style={{color: '#777', fontSize: 12}}>{this.renderTime()}</Text>
                </View>

                <View style={{padding: 10}}>
                    <Text>{this.props.post.body}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', padding: 10}}>
                    <Text>189 likes</Text>
                    <Text>194 comments</Text>
                </View>

                <TouchableOpacity style={styles.moreButton} onPress={() => console.log('who is there?')}>
                    <Text style={{textAlign: 'center', fontStyle: 'italic'}}>More ...</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
		position: 'relative',
		elevation: 2,
		shadowColor: '#000',
		backgroundColor: '#FFF',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: .1
    },
    moreButton: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#EEE'
    }
});

export default PostCard;
