import {
    EMAIL_CHANGED, USERNAME_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED
} from './AuthActionTypes';

export const emailChanged = payload => ({
    type: EMAIL_CHANGED,
    payload
});

export const usernameChanged = payload => ({
    type: USERNAME_CHANGED,
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