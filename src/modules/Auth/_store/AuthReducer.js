import {
    FIRSTNAME_CHANGED, LASTNAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED
} from './AuthActionTypes';

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    auth_loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRSTNAME_CHANGED:
            return {...state, firstname: action.payload};

        case LASTNAME_CHANGED:
            return {...state, lastname: action.payload};

        case EMAIL_CHANGED:
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case CONFIRMATION_PASSWORD_CHANGED:
            return {...state, password_confirmation: action.payload};

        default:
            return state;
    }
}