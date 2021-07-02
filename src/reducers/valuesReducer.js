import { values, global } from '../actions';

const initialState = {
  valuesList: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case values.SET_VALUES:
      return {
        ...state,
        valuesList: action.payload
      };
    case values.UPDATE_VALUES:
      return {
        ...state,
        valuesList: action.payload
      };
      case values.REMOVE_VALUES:
      return {
        ...state,
        valuesList: action.payload
      };
    case global.CLEAR_VALUES:
      return initialState;
    default:
      return state;
  }
};