import { expect } from 'chai';
import { LoadingLink } from './loading-link.component';

describe('Component LoadingLink', () => {

  let LoadingLinkDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = LoadingLink();
    LoadingLinkDOM = container.children[0];
  });

  it('Shoult exist the LoadingLink instance', () => {
    expect(LoadingLink).to.exist;
  });
  it('The call of the LoadingLink function should return a string', () => {
    expect(LoadingLink()).to.be.a("string");
  });
  it('The HTML markup for the LoadingLink component must be equal to the specified', () => {
  expect(LoadingLink()).to.equal(
    `<div class="loading-link">
      <div class="lds-ellipsis">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>`);
  });
  it('The LoadingLink component must have a class named loading-link', () => {
    expect(LoadingLinkDOM.className).to.equal("loading-link");
  });
  it('The LoadingLink component must have 1 child element', () => {
    expect(LoadingLinkDOM.children.length).to.equal(1);
  });
});