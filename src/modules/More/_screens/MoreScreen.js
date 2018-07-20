import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


class MoreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('ContactScreen')}>
                    <Text>Contact</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkButton} onPress={() => this.props.navigation.navigate('AboutScreen')}>
                    <Text>About</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    linkButton: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#EEE'
    }
});

export default MoreScreen;