import {GET_SOCKET_ID_SUCCESS, SEND_NEW_MESSAGE_SUCCESS, MESSAGE_CHANGED} from './ChatActionTypes';

const INITIAL_STATE = {
    socket_id: null,
    message_to_send: '',
    new_message: '',
    messages: []
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SOCKET_ID_SUCCESS:
            console.log('this is the socket_id: ', action.payload)
            return {...state, socket_id: action.payload};

        case MESSAGE_CHANGED:
            return {...state, message_to_send: action.payload};

        case SEND_NEW_MESSAGE_SUCCESS:
            state.messages.push(action.payload);
            return {...state, message_to_send: ''};

        default:
            return state;
    }
};