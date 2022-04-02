import { initialTasks } from '../data/tasks';
import * as actionTypes from '../constants/action-types';

const initialState = { data: initialTasks, loading: false, error: '' };

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    /* handling fetch data from server */
    case actionTypes.FETCH_TASKS_REQUEST:
      return { data: [], loading: true, error: '' };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return { data: action.payload, loading: false, error: '' };

    case actionTypes.FETCH_TASKS_ERROR:
      return { data: state, loading: false, error: action.payload };
    /* end of handling fetch data from server */

    case actionTypes.CREATE_TASK:
      return [...state, action.payload];

    case actionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};
