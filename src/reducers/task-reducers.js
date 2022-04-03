import { initialTasks } from '../data/tasks';
import * as actionTypes from '../constants/action-types';

const initialState = { data: initialTasks, loading: false, error: '' };

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    /* HANDLING FETCH DATA FROM SERVER */
    case actionTypes.FETCH_TASKS_REQUEST:
      return { data: [], loading: true, error: '' };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return { data: action.payload, loading: false, error: '' };

    case actionTypes.FETCH_TASKS_ERROR:
      return { data: state, loading: false, error: action.payload };
    /* end of handling fetch data from server */

    /* HANDLING CREATE NEW DATA */
    case actionTypes.CREATE_TASK_REQUEST:
      return { data: state.data, loading: true, error: '' };

    case actionTypes.CREATE_TASK_SUCCESS:
      return { data: [...state.data, action.payload], loading: false, error: '' };

    case actionTypes.CREATE_TASK_ERROR:
      return { data: state.data, loading: false, error: action.payload };
    /* end of handling create new data */

    /* HANDLING DELETE TASK */
    case actionTypes.DELETE_TASK_REQUEST:
      return { data: state.data, laoding: true, error: '' };

    case actionTypes.DELETE_TASK_SUCCESS:
      const filteredArray = state.data.filter((task) => task.id !== action.payload);
      return { data: filteredArray, loading: false, error: '' };

    case actionTypes.DELETE_TASK_ERROR:
      return { data: state.data, loading: false, error: action.payload };
    /* end of delete handling */

    default:
      return state;
  }
};
