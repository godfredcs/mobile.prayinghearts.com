import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
	AuthReducer
} from '../modules';

const rootPersistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	auth: AuthReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
