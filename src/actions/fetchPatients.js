import { UPDATE_PATIENTS } from '../constants/actions';

export default () => (
  {
    type: UPDATE_PATIENTS,
    patients: [{
      name: 'Pete',
    },
    {
      name: 'Lisa',
    }],
  }
);
