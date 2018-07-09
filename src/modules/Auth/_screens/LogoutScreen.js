import {Component} from 'react';
import {AsyncStorage, Alert} from 'react-native';

class LogoutScreen extends Component {
    componentDidMount() {
        this.logout();
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('api_token', () => this.props.navigation.navigate('LoginScreen'));
        } catch (error) {
            Alert.alert('Logout failed', 'Trouble logging user out');
        }
    };

    render() {
        return null;
    }
}

export default LogoutScreen;