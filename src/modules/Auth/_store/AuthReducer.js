import {
    EMAIL_CHANGED, USERNAME_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED
} from './AuthActionTypes';

const INITIAL_STATE = {
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    auth_loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case USERNAME_CHANGED:
            return {...state, username: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case CONFIRMATION_PASSWORD_CHANGED:
            return {...state, password_confirmation: action.payload};

        default:
            return state;
    }
}