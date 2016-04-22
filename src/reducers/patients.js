import { FETCH_PATIENTS_SUCCESS } from '../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PATIENTS_SUCCESS:
      return action.patients;
    default:
      return state;
  }
};
