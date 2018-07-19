import {
    FIRSTNAME_CHANGED, LASTNAME_CHANGED, EMAIL_CHANGED, PASSWORD_CHANGED, CONFIRMATION_PASSWORD_CHANGED
} from './AuthActionTypes';

export const firstnameChanged = payload => ({
    type: FIRSTNAME_CHANGED,
    payload
});

export const lastnameChanged = payload => ({
    type: LASTNAME_CHANGED,
    payload
});

export const emailChanged = payload => ({
    type: EMAIL_CHANGED,
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