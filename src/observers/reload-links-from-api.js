import nextOffset from '../helpers/state-functions/next-offset';
import setScrollActive from '../helpers/state-functions/set-scroll-active';

const reloadLinksFromAPI = (state) => {
  state.set(setScrollActive(state.get(), 'bottom'), false);
  state.set(nextOffset(state.get()), false);
  state.fire('synchronize');
};

export default reloadLinksFromAPI;
