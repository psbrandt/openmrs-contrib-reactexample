import { UPDATE_PATIENTS } from '../constants/actions';

export default () => (
  {
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
);
