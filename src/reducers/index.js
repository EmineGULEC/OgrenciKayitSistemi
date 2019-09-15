import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './kimlikdogrulamareducers';
import StudentsListReducer from './StudentsListReducer';


export default combineReducers({
kimlikdogrulamaResponse: kimlikdogrulamaReducers,
studentsListRespone: StudentsListReducer
});