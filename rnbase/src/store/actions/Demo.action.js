import * as ActionTypes from './ActionTypes';
import store from '../store';

export const setSensors = sensors => {
  return {
    type: ActionTypes.DEMO,
    sensors,
  };
};

export const setData = (sensor, id) => {
  const {sensors} = store.getState().sensorsReducers;
  const sensorCp = [...sensors];

  return {
    type: ActionTypes.DEMO,
    sensorCp,
  };
};
