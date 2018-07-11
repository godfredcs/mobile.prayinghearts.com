import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
	AuthReducer,
	ChatReducer
} from '../modules';

const rootPersistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	auth: AuthReducer,
	chat: ChatReducer
});

export default persistReducer(rootPersistConfig, rootReducer);
