import * as actionTypes from '../constants/action-types';
/* These functions are used by dispatch in Tasks.jsx to sent to STORE 
   which will be received by the REDUCER
*/
export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:7000/tasks', { method: 'GET' });
    const data = await response.json();
    // console.log(data);
    dispatch({ type: actionTypes.FETCH_TASKS, payload: data });
  };
};

export const createTask = (newTask) => {
  return { type: actionTypes.CREATE_TASK, payload: newTask };
};

export const deleteTask = (taskId) => {
  return { type: actionTypes.DELETE_TASK, payload: taskId };
};
