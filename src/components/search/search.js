import './search.scss';
import setSearchTerm from '../../helpers/state-functions/set-search-term';

const Search = (term) => `
  <div class="search">
    <div class="search__container">
      <button type="submit" class="search__button">
      <i class="fa fa-search"></i>
      </button> 
      <input 
        type="text" 
        class="search__term" 
        id="search-term" 
        value="${term}"
        placeholder="Você pode fazer uma busca..." />
    </div>
  </div>`;

const registerSearchTermInTheState = (state, eventData) => {
  state.set(setSearchTerm(state.get(), eventData.value), false);
  state.fire('synchronize');
};

const moveCursorToEnd = (el) => {
  const { length } = el.value;
  el.setSelectionRange(length, length);
};

const keepFocusOnTheSearch = (state, eventData) => {
  const search = document.querySelector('.search__term');
  if (state.get().UI.searchFocus) {
    search.focus();
    moveCursorToEnd(search);
  }
};

Search.events = {
  input: ['.search__term']
};

Search.handlers = {
  '.search__term:input': [registerSearchTermInTheState],
  'update': [keepFocusOnTheSearch]
}

export default Search;
