import './search.scss';

const Search = (term) => `
  <div class="wrap">
    <div class="search">
      <button type="submit" class="searchButton">
      <i class="fa fa-search"></i>
      </button> 
      <input 
        type="text" 
        class="searchTerm" 
        id="search-term" 
        value="${term}"
        placeholder="Você pode fazer uma busca..." />
    </div>
  </div>`;

export default Search;
