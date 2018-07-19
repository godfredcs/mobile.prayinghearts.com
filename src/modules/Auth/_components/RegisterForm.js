import React, {Component} from 'react';
import {View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {Feather} from '@expo/vector-icons';

import {
    firstnameChanged, lastnameChanged, emailChanged, passwordChanged, confirmationPasswordChanged
} from '../_store/AuthActions';

import Colors from '../../../constants/Colors';
import {Spinner, CustomInput, CustomButton} from '../../../components';

class RegisterForm extends Component {
    state = {loading: false};

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={{padding: 40}}>
                <View style={{alignItems: 'center'}}>
                    <Feather name="user" size={60} color={Colors.secondary} />
                </View>
                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Firstname"
                        onChangeText={value => this.props.firstnameChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Lastname"
                        onChangeText={value => this.props.lastnameChanged(value)}
                    />
                </View>

                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Email"
                        onChangeText={value => this.props.emailChanged(value)}
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
                                onPress={() => this.props.navigation.navigate('Main')}
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
    const {firstname, lastname, email, password, password_confirmation} = state.auth;
    return {firstname, lastname, email, password, password_confirmation};
};

export default connect(mapStateToProps, {
    firstnameChanged, lastnameChanged, emailChanged, passwordChanged, confirmationPasswordChanged
})(RegisterForm);