import generateParamsFetchLinks from '../../helpers/generate-params-fetch-links';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import loadMore from '../../helpers/load-more';
import setTotalCount from '../../helpers/set-total-count';
import setNewData from '../../helpers/set-new-data';

const reloadButtonHandlers = (document, store, fetchLinks) => {
  document.querySelector('#reload-button')
    .addEventListener('click', function() {
      store.setState(loadMore(store.getState()), false);
      const paramers = generateParamsFetchLinks(store.getState());
      store.setState(setIsFetching(store.getState()));
      console.log("state 1 ", store.getState());
      setTimeout(() => {
        fetchLinks(paramers).then((newData) => {
          store.setState(setTotalCount(store.getState(), newData.count), false);
          newData.links.then(links => {
            store.setState(setNewData({ ...store.getState() }, links));
            store.setState(clearIsFetching(store.getState()));
            console.log("state 2", store.getState());
          });
        });
      }, 2000);
      
    });
}

export default reloadButtonHandlers;
