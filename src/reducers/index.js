import { combineReducers } from "redux";

import { reducer as values } from './valuesReducer';

export const reducer = combineReducers({
    values,
});