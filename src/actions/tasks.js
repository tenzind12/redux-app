import * as actionTypes from '../constants/action-types';
import axios from 'axios';
/* These functions are used by dispatch in Tasks.jsx to sent to STORE 
   which will be received by the REDUCER
*/
export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:7000/tasks');
    console.log(response);
    dispatch({ type: actionTypes.FETCH_TASKS, payload: response.data });
  };
};

export const createTask = (newTask) => {
  return { type: actionTypes.CREATE_TASK, payload: newTask };
};

export const deleteTask = (taskId) => {
  return { type: actionTypes.DELETE_TASK, payload: taskId };
};
