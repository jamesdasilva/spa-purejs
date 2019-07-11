import setIsFetching from './helpers/set-is-fetching';
import clearIsFetching from './helpers/clear-is-fetching';
import initialState from './helpers/initial-state';
import setNewData from './helpers/set-new-data';
import getSearch from './helpers/get-search';

import storeFactory from './storage/store-factory';
import api from './api';
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
  api().then((newData) => {
    store.setState(setNewData(store.getState(), newData), true);
    store.setState(getSearch(store.getState()), false);
    setTimeout(() => {
      store.setState(clearIsFetching(store.getState()));
    }, 2000);
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
