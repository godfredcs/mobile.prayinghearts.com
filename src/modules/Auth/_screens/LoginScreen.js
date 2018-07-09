import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import {LoginForm} from '../_components';

class LoginScreen extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.innerContainer}>
                        <LoginForm navigation={this.props.navigation} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    }
});

export default LoginScreen;