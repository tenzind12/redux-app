import * as actionTypes from '../constants/action-types';
/* These functions are used by dispatch in Tasks.jsx to sent to STORE 
   which will be received by the REDUCER
*/

// F E T C H   T A S K   F R O M   D B
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

// C R E A T E   N E W   T A S K
export const createTask = (newTask) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_TASK_REQUEST });

    try {
      const response = await fetch('http://localhost:7000/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      dispatch({ type: actionTypes.CREATE_TASK_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actionTypes.CREATE_TASK_ERROR, payload: error });
    }

    // return { type: actionTypes.CREATE_TASK_ERROR, payload: newTask };
  };
};

// D E L E T E   T A S K
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_TASK_REQUEST });

    try {
      await fetch(`http://localhost:7000/tasks/${taskId}`, { method: 'DELETE' });
      dispatch({ type: actionTypes.DELETE_TASK_SUCCESS, payload: taskId });
    } catch (error) {
      dispatch({ type: actionTypes.DELETE_TASK_ERROR, payload: error });
    }
  };
};
