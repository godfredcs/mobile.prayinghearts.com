import { axios } from './index';

export default {
	// Get all posts from the server.
	index() {
		return axios.get('posts')
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	}
}