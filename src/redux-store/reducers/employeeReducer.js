import * as actionTypes from '../actions';

import { employeeListData }  from './employeeListData';

const intialState = {
    employeeListData: employeeListData
};

const reducer = (state=intialState, action) => {
    switch(action.type){
        case actionTypes.EMPLOYEE:
            return{
                employeeListData: action.value
            }
        default: 
            return state;
    }    
}

export default reducer;