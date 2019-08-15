import fetchLinks from '../repositories/fetch-links';
import setIsFetching from '../helpers/set-is-fetching';
import clearIsFetching from '../helpers/clear-is-fetching';
import setNewData from '../helpers/set-new-data';
import setTotalCount from '../helpers/set-total-count';
import generateParamsFetchLinks from '../helpers/generate-params-fetch-links';

const synchronize = (store) => {
  store.setState(setIsFetching(store.getState()));
  const paramers = generateParamsFetchLinks(store.getState());
  setTimeout(() => {
    fetchLinks(paramers).then((newData) => {
      store.setState(setTotalCount(store.getState(), newData.count), false);
      newData.links.then(links => {
        store.setState(setNewData({ ...store.getState() }, links), false);
        store.setState(clearIsFetching(store.getState()));
      });
    });
  }, 500);
}

export default synchronize;