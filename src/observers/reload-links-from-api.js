import loadMore from '../helpers/load-more';
import setScrollActive from '../helpers/set-scroll-active';

const reloadLinks = (store) => {
  store.setState(setScrollActive(store.getState(), 'bottom'), false);
  store.setState(loadMore(store.getState()), false);
  store.fire('synchronize');
};

export default reloadLinks;
