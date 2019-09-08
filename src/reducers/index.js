import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './kimlikdogrulamareducers';

export default combineReducers({
kimlikdogrulamaResponse: kimlikdogrulamaReducers
});