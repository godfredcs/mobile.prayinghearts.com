import {GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL} from './PostsActionTypes';
import Post from '../../../services/Post';

export const getAllPosts = () => async dispatch => {
    try {
        const posts = await Post.index();

        if (posts) {
            dispatch({type: GET_ALL_POSTS_SUCCESS, payload: posts});
        }
    } catch (error) {
        console.log('This is the error we run into while getting all posts: ', error);
    }
};