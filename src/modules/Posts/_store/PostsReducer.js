import {
    POST_TITLE_CHANGED, POST_BODY_CHANGED,
    ATTEMPT_CREATING_POST, CREATING_POST_SUCCESS, CREATING_POST_FAIL,
    GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL,
    GET_MY_POSTS_SUCCESS, GET_MY_POSTS_FAIL
} from './PostsActionTypes';

const INITIAL_STATE = {
    posts: [],
    my_posts: [],
    post_title: '',
    post_body: '',
    creating_post_loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_TITLE_CHANGED:
            return {...state, post_title: action.payload};

        case POST_BODY_CHANGED:
            return {...state, post_body: action.payload};

        case ATTEMPT_CREATING_POST:
            return {...state, creating_post_loading: true};

        case CREATING_POST_SUCCESS:
            return {...state, creating_post_loading: false};

        case CREATING_POST_FAIL:
            return {...state, creating_post_loading: false};

        case GET_ALL_POSTS_SUCCESS:
            return {...state, posts: action.payload.reverse()};

        case GET_MY_POSTS_SUCCESS:
            return {...state, my_posts: action.payload.reverse()};

        default:
            return state;
    }
};