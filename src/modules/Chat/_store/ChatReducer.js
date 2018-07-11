import {GET_SOCKET_ID_SUCCESS, SEND_NEW_MESSAGE_SUCCESS, MESSAGE_CHANGED} from './ChatActionTypes';

const INITIAL_STATE = {
    socket_id: null,
    message_to_send: '',
    new_message: ''
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SOCKET_ID_SUCCESS:
            return {...state, socket_id: action.payload};

        case MESSAGE_CHANGED:
            return {...state, message_to_send: action.payload};

        case SEND_NEW_MESSAGE_SUCCESS:
            return {...state, message_to_send: ''};

        default:
            return state;
    }
};