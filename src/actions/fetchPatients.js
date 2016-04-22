import { FETCH_PATIENTS, FETCH_PATIENTS_SUCCESS } from '../constants/actions';

import openMRS from '../lib/openMRS';

export default (searchTerm) => (dispatch) => {
  dispatch({
    type: FETCH_PATIENTS,
  });
  openMRS.api.patient.getAllPatients({
    q: searchTerm, // search query
    v: 'full', // data view
  }).then((response) => {
    dispatch({
      type: FETCH_PATIENTS_SUCCESS,
      patients: response.obj.results,
    });
  }).catch((err) => {
    console.log('Error fetching patients: ', err);
  });
};
