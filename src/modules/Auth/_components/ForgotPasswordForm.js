import React, { Component } from 'react';
import {
    LayoutAnimation,
    View
} from 'react-native';
import { connect } from 'react-redux';

import { emailChanged } from '../_store/AuthActions';

import Colors from '../../../constants/Colors';
import { Spinner, CustomInput, CustomButton } from '../../../components';

class ForgotPasswordForm extends Component {
    componentDidMount() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <View style={{ padding: 40 }}>
                <View style={{ width: '100%', marginVertical: 20 }}>
                    <CustomInput
                        placeholder="Email"
                        onChangeText={value => this.props.emailChanged(value)}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    {
                        this.props.auth_loading

                            ? <Spinner />

                            : <CustomButton
                                title="Request password reset"
                                color={Colors.secondary}
                                containerStyle={{borderWidth: 1, borderColor: Colors.secondary, borderRadius: 30}}
                                onPress={() => {}}
                            />
                    }
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <CustomButton
                        title="log in"
                        fontWeight="normal"
                        color={Colors.secondary}
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
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
    const {email, auth_loading} = state.auth;
    return {email, auth_loading};
};

export default connect(mapStateToProps, {emailChanged})(ForgotPasswordForm);