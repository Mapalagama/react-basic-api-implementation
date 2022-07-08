import { actionTypes } from "../constants/actionTypes";

const initState = {
  countryList: [],
};

export const countryReducer = (state = initState,{type,payload}) => {
    switch(type){
        case actionTypes.SET_COUNTRIES:
            return {...state,countryList:payload};
        default:
            return state;
    }
    
};
