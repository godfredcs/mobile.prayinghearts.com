import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

class PostCard extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => console.log('who is there?')}>
                <Text>This is the post card</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    }
});

export default PostCard;
