import updateSearchTerm from '../../helpers/update-search-term';
import moveCursorToEnd from '../../helpers/move-cursor-to-end';
import cleanFocus from '../../helpers/clean-focus';
import setFocus from '../../helpers/set-focus';
import generateParamsFetchLinks from '../../helpers/generate-params-fetch-links';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import setTotalCount from '../../helpers/set-total-count';
import setNewData from '../../helpers/set-new-data';
import fetchLinks from '../../fetch-links';

const searchHandlers = (document, store) => {
  document.querySelector('#search-term')
  .addEventListener('input', function(e){
    store.setState(updateSearchTerm(store.getState(), this.value), false);
    console.log('1', store.getState().UI.searchFocus);
    store.setState(setIsFetching(store.getState()));
    console.log('2', store.getState().UI.searchFocus);
      const paramers = generateParamsFetchLinks(store.getState());
      fetchLinks(paramers).then((newData) => {
        store.setState(setTotalCount(store.getState(), newData.count), false);
        console.log('3', store.getState().UI.searchFocus);
        newData.links.then(links => {
          store.setState(setNewData({ ...store.getState() }, links));
          store.setState(clearIsFetching(store.getState()));
          console.log('4', store.getState().UI.searchFocus);
        });
      });
  });

  if(store.getState().UI.searchFocus){
    document.querySelector('#search-term').focus();
    moveCursorToEnd(document.querySelector('#search-term')); 
  }

  /* document.querySelector('#search-term')
  .addEventListener('blur', function(){
    console.log("focus 2", store.getState().UI.searchFocus);
    store.setState(cleanFocus(store.getState()), false);
  }); */
}

export default searchHandlers