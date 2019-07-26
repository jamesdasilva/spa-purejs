import updateSearchTerm from '../../helpers/update-search-term';
import moveCursorToEnd from '../../helpers/move-cursor-to-end';
//import cleanFocus from '../../helpers/clean-focus';
import generateParamsFetchLinks from '../../helpers/generate-params-fetch-links';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import setTotalCount from '../../helpers/set-total-count';
import setNewData from '../../helpers/set-new-data';
import fetchLinks from '../../fetch-links';
import scrollTo from '../../helpers/scroll-to';
import setScrollActive from '../../helpers/set-scroll-active';

const searchHandlers = (document, store) => {
  const search = document.querySelector('#search-term');
  search && search.addEventListener('input', function(e){
    store.setState(updateSearchTerm(store.getState(), this.value), false);
    store.setState(setIsFetching(store.getState()));
      const paramers = generateParamsFetchLinks(store.getState());
      fetchLinks(paramers).then((newData) => {
        store.setState(setTotalCount(store.getState(), newData.count), false);
        newData.links.then(links => {
          store.setState(setScrollActive(store.getState(), 'top'), false);
          store.setState(setNewData({ ...store.getState() }, links));
          store.setState(clearIsFetching(store.getState()));
        });
      });
  });

  

  if(store.getState().UI.searchFocus){
    search.focus();
    moveCursorToEnd(search); 
  }

  /* search.addEventListener('blur', function(){
    console.log("focus 2", store.getState().UI.searchFocus);
    store.setState(cleanFocus(store.getState()), false);
  }); */
}

export default searchHandlers