import getSearch from '../../helpers/get-search';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import loadMore from '../../helpers/load-more';

const reloadButtonHandlers = (document, store) => {
  document.querySelector('#reload-button')
    .addEventListener('click', function() {
      store.setState(setIsFetching(store.getState()));
      setTimeout(() => {
        store.setState(loadMore(store.getState()), false);
        store.setState(getSearch(store.getState()), false);
        store.setState(clearIsFetching(store.getState()));
      }, 2000);
    });
}

export default reloadButtonHandlers;
