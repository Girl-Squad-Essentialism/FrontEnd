export const CLEAR_USER = 'CLEAR_USER';
export const clearUser = () => dispatch => {
  dispatch({ type: CLEAR_USER })
};