import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// const middlewares = [];

const store = createStore(reducer);

export default store;