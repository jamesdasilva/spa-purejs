import fetchLinks from '../repositories/fetch-links';
import setIsFetching from '../helpers/state-functions/set-is-fetching';
import clearIsFetching from '../helpers/state-functions/unset-is-fetching';
import setNewLinks from '../helpers/state-functions/set-new-links';
import setTotalCount from '../helpers/state-functions/set-total-count';
import getParamsFetchLinks from '../helpers/state-functions/get-params-fetch-links';

const synchronizeWithAPI = (state) => {
  state.set(setIsFetching(state.get()));
  const paramers = getParamsFetchLinks(state.get());
  setTimeout(() => {
    fetchLinks(paramers).then((newData) => {
      state.set(setTotalCount(state.get(), newData.count), false);
      newData.links.then(links => {
        state.set(setNewLinks({ ...state.get() }, links), false);
        state.set(clearIsFetching(state.get()));
      });
    });
  }, 500);
}

export default synchronizeWithAPI;