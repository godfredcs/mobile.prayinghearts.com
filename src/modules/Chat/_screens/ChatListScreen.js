import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    LayoutAnimation,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

import {getSocketId, receiveMessage} from '../_store/ChatActions';

import Colors from '../../../constants/Colors';

class ChatListScreen extends Component {
    componentDidMount() {
        this.props.getSocketId();
        this.props.receiveMessage();
        StatusBar.setBarStyle('light-content');
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen', {title: 'Kwame'})}>
                        <Text>Kwame</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen', {title: 'Frank'})}>
                        <Text>Frank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen', {title: 'Paul'})}>
                        <Text>Paul</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    touchableName: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#EEE'
    }
});

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, {getSocketId, receiveMessage})(ChatListScreen);