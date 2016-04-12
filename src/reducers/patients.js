import { UPDATE_PATIENTS } from '../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_PATIENTS:
      return action.patients;
    default:
      return state;
  }
};
