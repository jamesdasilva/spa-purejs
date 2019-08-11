import fetchLinks from './repositories/fetch-links';

const synchronize = ({ store, repositories }) => {
  store.setState(setIsFetching(store.getState()));
  const paramers = generateParamsFetchLinks(store.getState());
  setTimeout(() => {
    fetchLinks(paramers).then((newData) => {
      store.setState(setTotalCount(store.getState(), newData.count), false);
      newData.links.then(links => {
        store.setState(setNewData({ ...store.getState() }, links), true);
        store.setState(clearIsFetching(store.getState()));
      });
    });
  }, 500);
}

export { synchronize };