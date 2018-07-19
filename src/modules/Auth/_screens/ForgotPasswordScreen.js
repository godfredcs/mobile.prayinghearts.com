import React, { Component } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    View
} from 'react-native';

import ForgotPasswordForm from '../_components/ForgotPasswordForm';

class ForgotPasswordScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.innerContainer}>
                        <ForgotPasswordForm navigation={this.props.navigation} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    }
});

export default ForgotPasswordScreen;