import {GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL} from './PostsActionTypes';

const INITIAL_STATE = {
    posts: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_POSTS_SUCCESS:
            return {...state, posts: action.payload};

        default:
            return state;
    }
};