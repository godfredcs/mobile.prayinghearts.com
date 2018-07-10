import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';

class TimelineScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>This is the TimelineScreen</Text>
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

export default TimelineScreen;