import React from 'react';
import {connect} from 'react-redux';

import {attemptLogout} from '../_store/AuthActions';

class LogoutScreen extends React.Component {
    componentDidMount() {
        this.props.attemptLogout();
    }

    render() {
        return null;
    }
}

export default connect(null, {attemptLogout})(LogoutScreen);