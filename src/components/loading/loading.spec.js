import { expect } from 'chai';
import { Loading } from './loading.component';

describe('Component Loading', () => {

  let LoadingDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = Loading();
    LoadingDOM = container.children[0];
  });

  it('Shoult exist the Loading instance', () => {
    expect(Loading).to.exist;
  });
  it('The call of the Loading function should return a string', () => {
    expect(Loading()).to.be.a("string");
  });
  it('The HTML markup for the Loading component must be equal to the specified', () => {
  expect(Loading()).to.equal(
    `<div class="loading">
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>`);
  });
  it('The Loading component must have a class named loading', () => {
    expect(LoadingDOM.className).to.equal("loading");
  });
  it('The Loading component must have 1 child element', () => {
    expect(LoadingDOM.children.length).to.equal(1);
  });
});