import moveCursorToEnd from '../helpers/move-cursor-to-end';

const focusSearch = (store) => {
  const search = document.querySelector('.search__term');
  if (store.getState().UI.searchFocus) {
    search.focus();
    moveCursorToEnd(search);
  }
};

export default focusSearch;
