import {axios} from '../../../services';

export default {
	// Get all posts from the server.
	index() {
		return axios.get('posts')
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	// Store a new post (Create new post)
	store(post) {
		return axios.post('posts', post)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	// Get a post by its id
	show(id) {
		return axios.get(`posts/${id}`)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	// Get all posts by a specific user
	showAll(id) {
		return axios.get(`posts/user/${id}`)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	// Update post
	update(id, data) {
		return axios.put(`posts/${id}`, data)
					.then(response => Promise.resolve(response.data))
					.catch(error =>  Promise.reject(error.response.data));
	},

	// Delete post
	destroy(id) {
		return axios.put(`posts/${id}`)
					.then(response => Promise.resolve(response.data))
					.catch(error =>  Promise.reject(error.response.data));
	}
}
