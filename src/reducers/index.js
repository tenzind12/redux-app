import { taskReducer } from './task-reducers';
import { combineReducers } from 'redux';

// combine multiple reducers as single unit
const allReducers = combineReducers({ tasks: taskReducer });

export default allReducers;
