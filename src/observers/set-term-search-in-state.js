import updateSearchTerm from '../helpers/update-search-term';

const setTermSearchInState = (store, event) => {
  store.setState(updateSearchTerm(store.getState(), event.value), false);
  store.fire('synchronize');
};

export default setTermSearchInState;
