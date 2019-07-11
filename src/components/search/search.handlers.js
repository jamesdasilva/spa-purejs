import updateSearchTerm from '../../helpers/update-search-term';
import getSearch from '../../helpers/get-search';
import moveCursorToEnd from '../../helpers/move-cursor-to-end';
import cleanFocus from '../../helpers/clean-focus';

const searchHandlers = (document, store) => {
  document.querySelector('#search-term')
  .addEventListener('input', function(e){
    store.setState(updateSearchTerm(store.getState(), this.value), false);
    store.setState(getSearch(store.getState()));
    document.querySelector('#search-term').focus();
    moveCursorToEnd(document.querySelector('#search-term'));
  });

  document.querySelector('#search-term')
  .addEventListener('blur', function(){
    store.setState(cleanFocus(store.getState()), false);
  });
}

export default searchHandlers