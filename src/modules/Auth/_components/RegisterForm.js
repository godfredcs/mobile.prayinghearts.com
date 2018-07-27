import React, {Component} from 'react';
import {View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {Feather} from '@expo/vector-icons';

import {
    emailChanged, usernameChanged, passwordChanged, confirmationPasswordChanged,
    attemptRegister
} from '../_store/AuthActions';

import Colors from '../../../constants/Colors';
import {Spinner, CustomInput, CustomButton} from '../../../components';

class RegisterForm extends Component {
    state = {loading: false};

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    attemptRegister = () => {
        const {email, username, password, password_confirmation} = this.props;

        this.props.attemptRegister({email, username, password, password_confirmation});
    }

    render() {
        return (
            <View style={{padding: 40}}>
                <View style={{alignItems: 'center'}}>
                    <Feather name="user" size={60} color={Colors.secondary} />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Email"
                        onChangeText={value => this.props.emailChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Username"
                        onChangeText={value => this.props.usernameChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={value => this.props.passwordChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        secureTextEntry
                        placeholder="Confirm password"
                        onChangeText={value => this.props.confirmationPasswordChanged(value)}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    {
                        this.state.loading

                            ? <Spinner />

                            : <CustomButton
                                title="Register"
                                color={Colors.secondary}
                                containerStyle={{borderWidth: 1, borderColor: Colors.secondary, borderRadius: 30, marginBottom: 0}}
                                onPress={this.attemptRegister}
                            />
                    }
                </View>

                <View>
                    <CustomButton
                        title="log in"
                        fontWeight="normal"
                        color={Colors.secondary}
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const {email, username, password, password_confirmation} = state.auth;
    return {email, username, password, password_confirmation};
};

export default connect(mapStateToProps, {
    emailChanged, usernameChanged, passwordChanged, confirmationPasswordChanged,
    attemptRegister
})(RegisterForm);
