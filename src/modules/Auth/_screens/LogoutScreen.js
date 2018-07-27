import React from 'react';
import {connect} from 'react-redux';

import {attemptLogout} from '../_store/AuthActions';

class LogoutScreen extends React.Component {
    componentDidMount() {
        this.props.attemptLogout(this.navigateToLoginScreen);
    }

    navigateToLoginScreen = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return null;
    }
}

export default connect(null, {attemptLogout})(LogoutScreen);