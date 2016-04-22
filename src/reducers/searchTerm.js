import { UPDATE_SEARCH_TERM } from '../constants/actions';

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};
