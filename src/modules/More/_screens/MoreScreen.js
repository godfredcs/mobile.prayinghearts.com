import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


class MoreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('ProfileScreen', {title: 'Profile'})}>
                    <Text>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('ContactScreen', {title: 'Contact'})}>
                    <Text>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('AboutScreen', {title: 'About'})}>
                    <Text>About</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('LogoutScreen', {title: 'Log out'})}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE'
    },
    linkButton: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#EEE',
        backgroundColor: '#FFF'
    }
});

export default MoreScreen;