import { UPDATE_PATIENTS } from '../constants/actions';

import openMRS from '../lib/openMRS';

export default (searchTerm) => (dispatch) => {
  openMRS.api.patient.getAllPatients({
    q: searchTerm, // search query
    v: 'full', // data view
  }).then((response) => {
    dispatch({
      type: UPDATE_PATIENTS,
      patients: response.obj.results,
    });
  }).catch((err) => {
    console.log('Error fetching patients: ', err);
  });
};
