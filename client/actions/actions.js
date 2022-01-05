// import actionType constants
import * as types from '../constants/actionTypes.jsx';

//updates
export const updateBudget = (responseObj) => {
  return {
    type: types.UPDATE_BUDGET,
    payload: responseObj,
  };
};

export const inputSpending = () => {
  return {
    type: types.INPUT,
    payload: '',
  };
};
