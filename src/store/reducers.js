import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
	AuthReducer,
	PostsReducer,
	ChatReducer
} from '../modules';

const rootPersistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	auth: AuthReducer,
	posts: PostsReducer,
	chat: ChatReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
