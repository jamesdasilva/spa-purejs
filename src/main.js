import pageMount from './helpers/page-mount';
import moveCursorToEnd from './helpers/move-cursor-to-end';
import setIsFetching from './helpers/set-is-fetching';
import clearIsFetching from './helpers/clear-is-fetching';
import loadMore from './helpers/load-more';
import updateSearchTerm from './helpers/update-search-term';
import initialState from './helpers/initial-state';
import setNewData from './helpers/set-new-data';
import getSearch from './helpers/get-search';

import storeFactory from './storage/store-factory';
import api from './api';
import './main.scss';
import 'font-awesome/css/font-awesome.css';

let root = document.querySelector('#root');
const store = storeFactory(root);

// estado inicial
store.setState(initialState());

// buscar dados persistidos
store.setState(setIsFetching(store.getState()));
api().then((newData) => {
  store.setState(setNewData(store.getState(), newData), false);
  store.setState(getSearch(store.getState()), false);
  setTimeout(() => {
    store.setState(clearIsFetching(store.getState()));
  }, 2000);
});

// eventos
root.addEventListener('refresh', (e) => {
  pageMount(e.detail, document).then(() => {

    document.querySelector('#reload-button')
      .addEventListener('click', function() {
        store.setState(setIsFetching(store.getState()));
        setTimeout(() => {
          store.setState(loadMore(store.getState()), false);
          store.setState(getSearch(store.getState()), false);
          store.setState(clearIsFetching(store.getState()));
          console.log(store.getState());
        }, 2000);
      });

      document.querySelector('#search-term')
      .addEventListener('input', function(e){
        store.setState(updateSearchTerm(store.getState(), this.value), false);
        store.setState(getSearch(store.getState()));
        document.querySelector('#search-term').focus();
        moveCursorToEnd(document.querySelector('#search-term'));
        console.log("store.getState() ", store.getState());
      });

      document.querySelector('#search-term')
      .addEventListener('blur', function(){
        store.setState({
          ...store.getState(),
          UI:{
            ...store.getState().UI,
            searchFocus: false
          }
        }, false);
      });
    });
});
