import { initialTasks } from '../data/tasks';
import * as actionTypes from '../constants/action-types';

export const taskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS:
      return action.payload;

    case actionTypes.CREATE_TASK:
      return [...state, action.payload];

    case actionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};
