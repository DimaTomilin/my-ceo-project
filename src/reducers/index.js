import { combineReducers } from 'redux';
import { paramedicReducer } from './paramedicReducer';
import { equipmentReducer } from './equipmentReducer';

export default combineReducers({
  paramedic: paramedicReducer,
  equipment: equipmentReducer,
});
