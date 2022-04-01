import * as actionTypes from '../constants/action-types.js';

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
