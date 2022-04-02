import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;
