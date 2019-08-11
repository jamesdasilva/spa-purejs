import updateSearchTerm from '../../helpers/update-search-term';
import moveCursorToEnd from '../../helpers/move-cursor-to-end';

const searchHandlers = (document, store) => {
  const search = document.querySelector('.search__term');
  search && search.addEventListener('input', function(){
    store.setState(updateSearchTerm(store.getState(), this.value), false);
    store.fire('synchronize');
  });
  if (store.getState().UI.searchFocus) {
    search.focus();
    moveCursorToEnd(search);
  }
};

export default searchHandlers;
