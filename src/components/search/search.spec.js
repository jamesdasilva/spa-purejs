import { expect } from 'chai';
import { Search } from './search.component';

describe('Component Search', () => {

  let SearchDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = Search();
    SearchDOM = container.children[0];
  });

  it('Shoult exist the Search instance', () => {
    expect(Search).to.exist;
  });
  it('The call of the Search function should return a string', () => {
    expect(Search("teste")).to.be.a("string");
  });
  it('If the function parameter is "Test", the value attribute of the input text of the markup must contain the word "Test"', () => {
  expect(Search("Teste")).to.equal(
    `<div class="wrap">
      <div class="search">
        <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
        </button> 
        <input 
          type="text" 
          class="searchTerm" 
          id="search-term" 
          value="Teste"
          placeholder="Você pode fazer uma busca..." />
      </div>
    </div>`);
  });
  it('The Search component must have a class named wrap', () => {
    expect(SearchDOM.className).to.equal("wrap");
  });
  it('The Search component must have 1 child element', () => {
    expect(SearchDOM.children.length).to.equal(1);
  });
});