import {AsyncStorage} from 'react-native';
import {
    POST_TITLE_CHANGED, POST_BODY_CHANGED,
    ATTEMPT_CREATING_POST, CREATING_POST_SUCCESS, CREATING_POST_FAIL,
    GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL,
    GET_MY_POSTS_SUCCESS, GET_MY_POSTS_FAIL
} from './PostsActionTypes';
import Post from './PostService';

export const postTitleChanged = payload => ({
    type: POST_TITLE_CHANGED,
    payload
});

export const postBodyChanged = payload => ({
    type: POST_BODY_CHANGED,
    payload
});

export const getAllPosts = () => async dispatch => {
    try {
        const posts = await Post.index();

        if (posts) {
            dispatch({type: GET_ALL_POSTS_SUCCESS, payload: posts});
        }
    } catch (error) {
        dispatch({type: GET_ALL_POSTS_FAIL, payload: error});
        console.log('This is the error we run into while getting all posts: ', error);
    }
};

export const getMyPosts = () => async dispatch => {
    try {
        const user_id = await AsyncStorage.getItem('user_id');

        const posts = await Post.showAll(user_id);

        if (posts) {
            dispatch({type: GET_MY_POSTS_SUCCESS, payload: posts});
        }
    } catch (error) {
        dispatch({type: GET_MY_POSTS_FAIL, payload: error});
        console.log(`We run into these errors when getting my posts ${error}`);
    }
};

export const createPost = (post) => async dispatch => {
    try {
        dispatch({type: ATTEMPT_CREATING_POST});

        const result = await Post.store(post);

        if (result) {
            dispatch({type: CREATING_POST_SUCCESS});
        }
    } catch (error) {
        dispatch({type: CREATING_POST_FAIL, payload: error});
        console.log(`These are the errors we had when creating post ${error}`);
    }
}
