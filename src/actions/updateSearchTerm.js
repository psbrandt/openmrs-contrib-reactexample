import { UPDATE_SEARCH_TERM } from '../constants/actions';

export default (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm,
});
