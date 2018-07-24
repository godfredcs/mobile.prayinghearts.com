import {axios} from '../../../services';

export default {
	/**
	 * Try authenticating user by posting user data to server
	 */
	authenticate(user) {
		return axios.post('users/login', user)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	/**
	 * Store a new user (Register)
	 */
	store(user) {
		return axios.post('users/register', user)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	/**
	 * Get currently logged in user's info. Needed to refresh
	 * users data
	 */
	getUserInfo(id) {
		return axios.get('users/' + id)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	/**
	 * Get currently logged in user's info. Needed to refresh
	 * users data
	 */
	updateUserInfo(id, user) {
		return axios.put('users/' + id, user)
					.then(response => Promise.resolve(response.data))
					.catch(error =>  Promise.reject(error.response.data));
	},

	/**
	 * Get a confirmation code for the user using the specified mode.
	 *
	 * @param  string mode
	 * @return null
	 */
	getConfirmationToken(mode) {
		return axios.post(`users/generate_token/${mode}`)
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	/**
	 * Get a confirmation code for the user using the specified mode.
	 *
	 * @param  string mode
	 * @return null
	 */
	confirmConfirmationToken(mode, token) {
		return axios.post(`users/confirm_token/${mode}`, { token })
					.then(response => Promise.resolve(response.data))
					.catch(error => Promise.reject(error.response.data));
	},

	/**
     * Send new password request
     *
     * @param {Object} data
     */
	requestPasswordReset(data) {
	    return axios.post('users/request_reset', {
	    	    email: data.email
	        })
			.then(response => Promise.resolve(response.data))
			.catch(error => Promise.reject(error.response.data));
	},

    /**
     * Reset password for user
     *
     * @param  {Object} data Data to send
     * @return {Promise}
     */
	resetPassword(data) {
		return axios.post('users/reset_password', data)
			.then(response => Promise.resolve(response.data))
			.catch(error => Promise.reject(error.response.data));
	},

	/**
	 * Send Message from contact form
	 *
	 * @param  {Object} data
	 * @return {Promise}
	 */
	sendMessage(data) {
		return axios.post('users/contact_us', data)
			.then(response => Promise.resolve(response.data))
			.catch(error => Promise.reject(error.response.data));
	}
}

