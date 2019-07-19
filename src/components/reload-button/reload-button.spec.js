import { expect } from 'chai';
import { ReloadButton } from './reload-button.component';

describe('Component ReloadButton', () => {

  let ReloadButtonDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = ReloadButton(true);
    ReloadButtonDOM = container.children[0];
  });

  it('Shoult exist the ReloadButton instance', () => {
    expect(ReloadButton).to.exist;
  });
  it('The call of the ReloadButton function should return a string', () => {
    expect(ReloadButton(true)).to.be.a("string");
  });
  it('The HTML markup for the ReloadButton component must be equal to the specified', () => {
  expect(ReloadButton(true)).to.equal(
    `<div class="reload-btn" id="reload-button">
      <span class="reload-btn__icon-ctnr reload-btn__icon-ctnr--spinning">
        <i class="fa fa-refresh"></i>
      </span> Load more
    </div>`);
  });
  it('The ReloadButton component must have a class named loading-link', () => {
    expect(ReloadButtonDOM.className).to.equal("reload-btn");
  });
  it('The ReloadButton component must have 2 child element', () => {
    expect(ReloadButtonDOM.children.length).to.equal(1);
  });
});