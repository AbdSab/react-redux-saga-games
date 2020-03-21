import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import saga from './sagas';

const reducer = combineReducers({});
const sagaMiddleware = createSagaMiddleware(saga);

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;