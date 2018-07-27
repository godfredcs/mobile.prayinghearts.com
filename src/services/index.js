import { AsyncStorage } from 'react-native';
import Axios from 'axios';

export const axios = Axios.create({
	baseURL: 'http://192.168.8.101:5000',

	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
});

// Intercept each request and set the bearer token for user
axios.interceptors.request.use( async config => {
	let apiToken = await AsyncStorage.getItem('api_token');

	if (apiToken && !config.headers.common.Authorization) {
		config.headers.common.Authorization = `Bearer ${apiToken}`;
	}

	return config;
});

