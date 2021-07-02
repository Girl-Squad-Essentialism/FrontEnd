export const SET_VALUES = 'SET_VALUES';
export const setValues = valuesData => dispatch => {
  dispatch({ type: SET_VALUES, payload: valuesData })
};

export const UPDATE_VALUES = 'UPDATE_VALUES';
export const updateValues = valuesData => dispatch => {
  dispatch({ type: UPDATE_VALUES, payload: valuesData })
};

export const REMOVE_VALUES = 'REMOVE_VALUES';
export const removeValues = valuesData => dispatch => {
  dispatch({ type: REMOVE_VALUES, payload: valuesData })
};



