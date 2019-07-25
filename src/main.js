import setIsFetching from './helpers/set-is-fetching';
import clearIsFetching from './helpers/clear-is-fetching';
import initialState from './helpers/initial-state';
import setNewData from './helpers/set-new-data';
import setTotalCount from './helpers/set-total-count';
import generateParamsFetchLinks from './helpers/generate-params-fetch-links';

import storeFactory from './storage/store-factory';
import fetchLinks from './fetch-links';
import './main.scss';
import 'font-awesome/css/font-awesome.css';

import render from './render';
import LinksExplorer from './pages/links-explorer/links-explorer';

import { appendDOMHandlers } from './components.list';

window.addEventListener('load', function() {

  const root = document.querySelector('#root');
  const store = storeFactory(root);

  // estado inicial
  store.setState(initialState(), false);

  // buscar dados persistidos
  store.setState(setIsFetching(store.getState()));

  const paramers = generateParamsFetchLinks(store.getState());

  fetchLinks(paramers).then((newData) => {
    store.setState(setTotalCount(store.getState(), newData.count), false);
    newData.links.then(links => {
      store.setState(setNewData({ ...store.getState() }, links), true);
      setTimeout(() => {
        store.setState(clearIsFetching(store.getState()));
      }, 2000);
    });
  });

  // eventos
  root.addEventListener('refresh', (e) => {
    render(root, e.detail, LinksExplorer, () => {
      if(document){
        appendDOMHandlers(document, store);
      }
    });
  });

});
