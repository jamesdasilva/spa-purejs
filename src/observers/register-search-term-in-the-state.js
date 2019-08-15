import setSearchTerm from '../helpers/state-functions/set-search-term';

const registerSearchTermInState = (state, event) => {
  state.set(setSearchTerm(state.get(), event.value), false);
  state.fire('synchronize');
};

export default registerSearchTermInState;
