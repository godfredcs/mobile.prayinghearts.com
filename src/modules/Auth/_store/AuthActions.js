import Auth from './AuthServices';
import {AsyncStorage} from 'react-native';
import {
    EMAIL_CHANGED, USERNAME_CHANGED, USERNAME_OR_EMAIL_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED,
    ATTEMPT_REGISTER, REGISTER_SUCCESS, REGISTER_FAIL,
    ATTEMPT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
    ATTEMPT_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL
} from './AuthActionTypes';

export const emailChanged = payload => ({
    type: EMAIL_CHANGED,
    payload
});

export const usernameChanged = payload => ({
    type: USERNAME_CHANGED,
    payload
});

export const usernameOrEmailChanged = payload => ({
    type: USERNAME_OR_EMAIL_CHANGED,
    payload
});

export const passwordChanged = payload => ({
    type: PASSWORD_CHANGED,
    payload
});

export const confirmationPasswordChanged = payload => ({
    type: CONFIRMATION_PASSWORD_CHANGED,
    payload
});

export const attemptRegister = details => async dispatch => {
    try {
        dispatch({type: ATTEMPT_REGISTER});

        const user = await Auth.store(details);

        if (user) {
            await AsyncStorage.setItem('api_token', user.api_token);
            await AsyncStorage.setItem('user_id', user._id);

            dispatch({type: REGISTER_SUCCESS, payload: user});
        }
    } catch (error) {
        console.log(`these are the errors we get from registering ${error}`);
        dispatch({type: REGISTER_FAIL, payload: error});
    }
};

export const attemptLogin = details => async dispatch => {
    try {
        dispatch({type: ATTEMPT_LOGIN});

        const user = await Auth.authenticate(details);

        if (user) {
            await AsyncStorage.setItem('api_token', user.api_token);
            await AsyncStorage.setItem('user_id', user._id);

            dispatch({type: LOGIN_SUCCESS, payload: user});
        }
    } catch (error) {
        console.log(`these are the errors we get from login ${JSON.stringify(error)}`);
        dispatch({type: LOGIN_FAIL, payload: error});
    }
};

export const attemptLogout = () => async dispatch => {
    try {
        dispatch({type: ATTEMPT_LOGOUT});

        await AsyncStorage.removeItem('user_id');
        await AsyncStorage.removeItem('api_token');

        dispatch({type: LOGOUT_SUCCESS});
    } catch (error) {
        dispatch({type: LOGOUT_FAIL});
    }
}