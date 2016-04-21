import { UPDATE_PATIENTS } from '../constants/actions';

import openMRS from '../lib/openMRS';

export default () => {
  openMRS.api.patient.getAllPatients({
    q: 'Jac', // search query
    v: 'Full', // data view
  }).then((results) => {
    console.log(results.obj);
  }).catch((err) => {
    console.log(err);
  });

  return {
    type: UPDATE_PATIENTS,
    patients: [{
      id: '1223',
      name: 'Pete',
    },
    {
      id: '1224',
      name: 'Pete',
    }],
  }
};
