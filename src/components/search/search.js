import './search.scss';
import searchHandlers from './search.handlers';

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

Search.events = {
  input: ['.search__term']
};

export { searchHandlers };
export default Search;