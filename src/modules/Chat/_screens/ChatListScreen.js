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

import Colors from '../../../constants/Colors';

class ChatListScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen')}>
                        <Text>Kwame</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen')}>
                        <Text>Frank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableName} onPress={() => this.props.navigation.navigate('ChatScreen')}>
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

export default ChatListScreen;