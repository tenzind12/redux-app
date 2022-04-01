import * as actionTypes from '../constants/action-types.js';

// this function is used by dispatch to sent to STORE
export const createTask = (newTask) => {
  return {
    type: actionTypes.CREATE_TASK,
    payload: newTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: taskId,
  };
};
