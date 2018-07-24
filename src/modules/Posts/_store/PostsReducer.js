import {
    GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL,
    GET_MY_POSTS_SUCCESS, GET_MY_POSTS_FAIL
} from './PostsActionTypes';

const INITIAL_STATE = {
    posts: [],
    my_posts: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_POSTS_SUCCESS:
            return {...state, posts: action.payload.reverse()};

        case GET_MY_POSTS_SUCCESS:
            return {...state, my_posts: action.payload.reverse()};

        default:
            return state;
    }
};