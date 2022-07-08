import {combineReducers} from 'redux';
import { countryReducer } from './countryReducer';

export const reducers = combineReducers({
    country:countryReducer
})