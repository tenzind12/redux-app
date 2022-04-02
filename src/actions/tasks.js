import * as actionTypes from '../constants/action-types';
/* These functions are used by dispatch in Tasks.jsx to sent to STORE 
   which will be received by the REDUCER
*/
export const fetchTasks = () => {
  return async (dispatch) => {
    // first: set data=[], loading=true, error='' (executed by reducer)
    dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });

    try {
      const response = await fetch('http://localhost:7000/tasks', { method: 'GET' });
      const data = await response.json();

      // second: if (success) data=data, loading=false, error=''
      dispatch({ type: actionTypes.FETCH_TASKS_SUCCESS, payload: data });
    } catch (err) {
      // if(error) data=prvState, loading=false, error=err
      dispatch({ type: actionTypes.FETCH_TASKS_ERROR, payload: err });
    }
  };
};

export const createTask = (newTask) => {
  return { type: actionTypes.CREATE_TASK, payload: newTask };
};

export const deleteTask = (taskId) => {
  return { type: actionTypes.DELETE_TASK, payload: taskId };
};
