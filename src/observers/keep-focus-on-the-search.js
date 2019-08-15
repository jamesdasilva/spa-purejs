import moveCursorToEnd from '../helpers/move-cursor-to-end';

const keepFocusOnTheSearch = (state) => {
  const search = document.querySelector('.search__term');
  if (state.get().UI.searchFocus) {
    search.focus();
    moveCursorToEnd(search);
  }
};

export default keepFocusOnTheSearch;
