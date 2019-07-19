import { expect } from 'chai';
import { Logo } from './logo.component';

describe('Component Logo', () => {

  let LogoDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = Logo();
    LogoDOM = container.children[0];
  });

  it('Shoult exist the Logo instance', () => {
    expect(Logo).to.exist;
  });
  it('The call of the Logo function should return a string', () => {
    expect(Logo()).to.be.a("string");
  });
  it('The HTML markup for the Logo component must be equal to the specified', () => {
  expect(Logo()).to.equal(
    `<div class="logo">
      <div class="logo__hexagon"></div>
      <div class="logo__text">UX</div>
    </div>`);
  });
  it('The Logo component must have a class named logo', () => {
    expect(LogoDOM.className).to.equal("logo");
  });
  it('The Logo component must have 2 child element', () => {
    expect(LogoDOM.children.length).to.equal(2);
  });
});