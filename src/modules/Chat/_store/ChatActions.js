import {AsyncStorage} from 'react-native';
import socket from '../../../services/Socket';

import {GET_SOCKET_ID_SUCCESS, MESSAGE_CHANGED, SEND_NEW_MESSAGE_SUCCESS, NEW_MESSAGE} from './ChatActionTypes';

export const getSocketId = () => async dispatch => {
    try {
        const socket_id = await AsyncStorage.getItem('socket_id');

        if (socket_id) {
            dispatch({type: GET_SOCKET_ID_SUCCESS, payload: socket_id});
            socket.emit('got_socket_id');
        } else {
            socket.emit('get_socket_id');
            socket.on('received_socket_id', id => {
                AsyncStorage.setItem('socket_id', id);
                dispatch({type: GET_SOCKET_ID_SUCCESS, payload: id});
            })
        }
    } catch (error) {
        console.log('this is the error ', error);
    }
};

export const messageChanged = payload => ({type: MESSAGE_CHANGED, payload});

export const sendNewMessage = message => async dispatch => {
    try {
        if (message) {
            socket.emit('new_message', message);
            dispatch({type: SEND_NEW_MESSAGE_SUCCESS, payload: message});
        }
    } catch (error) {
        console.log('this is the error we got from trying to send a message ', error);
    }
};

export const receiveMessage = () => async dispatch => {
    try {
        socket.on('new_message', message => {
            dispatch({type: NEW_MESSAGE, payload: message})
        })
    } catch (error) {
        console.log('this is the error ', error);
    }
};
