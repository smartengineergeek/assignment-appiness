import { combineReducers } from 'redux';

import employeeListReducer from './employeeReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({employeeListReducer, loginReducer});

export default rootReducer;