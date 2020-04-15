import { combineReducers } from 'redux';

import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage/session';

import ListsReducer from './listreducer';
import HomeReducer from './homepageReducer';

const persistConfig ={
    key:'root',
    storage,
    whitelist:['lists','home']
}

const rootReducer = combineReducers({
    lists: ListsReducer,
    home : HomeReducer
});



export default persistReducer(persistConfig,rootReducer);

