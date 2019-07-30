import generateParamsFetchLinks from '../../helpers/generate-params-fetch-links';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import loadMore from '../../helpers/load-more';
import setTotalCount from '../../helpers/set-total-count';
import setNewData from '../../helpers/set-new-data';
import cleanScrollActive from '../../helpers/clean-scroll-active';
import setScrollActive from '../../helpers/set-scroll-active';

const reloadButtonHandlers = (document, store, fetchLinks) => {
  const button = document.querySelector('#reload-button');
  button && button.addEventListener('click', function() {
      store.setState(setScrollActive(store.getState(), 'bottom'), false);
      store.setState(loadMore(store.getState()), false);
      store.fire('synchronize');
    });
}

export default reloadButtonHandlers;
