import {configureStore, compose} from '@reduxjs/toolkit';
import reducer from './rootReducer';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({reducer: reducer}, {}, enhancer);

export default store;