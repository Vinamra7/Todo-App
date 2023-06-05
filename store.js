// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './src/reducers/index';

const store = configureStore({
    reducer
});

export default store;
