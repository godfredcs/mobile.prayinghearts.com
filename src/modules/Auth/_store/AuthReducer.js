import {
    EMAIL_CHANGED, USERNAME_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED, USERNAME_OR_EMAIL_CHANGED,
    ATTEMPT_REGISTER, REGISTER_SUCCESS, REGISTER_FAIL,
    ATTEMPT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
    ATTEMPT_LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL
} from './AuthActionTypes';

const INITIAL_STATE = {
    isFirstTime: true,
    isAuthenticated: false,
    email: '',
    username: '',
    username_or_email: '',
    password: '',
    password_confirmation: '',
    register_loading: false,
    register_errors: null,
    login_loading: false,
    login_errors: null,
    user: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case USERNAME_CHANGED:
            return {...state, username: action.payload};

        case USERNAME_OR_EMAIL_CHANGED:
            return {...state, username_or_email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case CONFIRMATION_PASSWORD_CHANGED:
            return {...state, password_confirmation: action.payload};

        case ATTEMPT_REGISTER:
            return {...state, register_errors: null, register_loading: true};

        case REGISTER_SUCCESS:
            return {...state, register_loading: false, user: action.payload, isFirstTime: false, isAuthenticated: true};

        case REGISTER_FAIL:
            return {...state, user: null, register_loading: false, register_errors: action.payload, isAuthenticated: false};

        case ATTEMPT_LOGIN:
            return {...state, login_errors: null, login_loading: true};

        case LOGIN_SUCCESS:
            return {...state, login_loading: false, user: action.payload, isFirstTime: false, isAuthenticated: true};

        case LOGIN_FAIL:
            return {...state, user: null, login_loading: false, login_errors: action.payload, isAuthenticated: false};

        case ATTEMPT_LOGOUT:
            return {...state};

        case LOGOUT_SUCCESS:
            return {...state, isAuthenticated: false};

        case LOGOUT_FAIL:
            return {...state};

        default:
            return state;
    }
}