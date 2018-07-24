import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, LayoutAnimation } from 'react-native';

import { usernameOrEmailChanged, passwordChanged, attemptLogin } from '../_store/AuthActions';

import Colors from '../../../constants/Colors';
import { Spinner, CustomInput, CustomButton } from '../../../components';

class LoginForm extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    attemptLogin = () => {
        const {username_or_email, password} = this.props;
        this.props.attemptLogin({username_or_email, password}, () => this.props.navigation.navigate('Main'));
    }

    render() {
        return (
            <View style={{ padding: 40 }}>
                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Email / Username"
                        onChangeText={value => this.props.usernameOrEmailChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={value => this.props.passwordChanged(value)}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    {
                        this.props.login_loading

                            ? <Spinner />

                            : <CustomButton
                                title="Log in"
                                color={Colors.secondary}
                                containerStyle={{borderWidth: 1, borderColor: Colors.secondary, borderRadius: 30}}
                                onPress={this.attemptLogin}
                            />
                    }
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <CustomButton
                        title="forgot password?"
                        fontWeight="normal"
                        color={Colors.secondary}
                        onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
                    />

                    <CustomButton
                        title="register"
                        fontWeight="normal"
                        color={Colors.secondary}
                        onPress={() => this.props.navigation.navigate('RegisterScreen')}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const {username_or_email, password, login_loading} = state.auth;
    return {username_or_email, password, login_loading};
};

export default connect(mapStateToProps, {usernameOrEmailChanged, passwordChanged, attemptLogin})(LoginForm);