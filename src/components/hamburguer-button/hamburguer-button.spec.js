import { expect } from 'chai';
import { HamburguerButton } from './hamburguer-button.component';

describe('Component HamburguerButton', () => {

  let HamburguerButtonDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = HamburguerButton();
    HamburguerButtonDOM = container.children[0];
  });

  it('Shoult exist the HamburguerButton instance', () => {
    expect(HamburguerButton).to.exist;
  });
  it('The call of the HamburguerButton function should return a string', () => {
    expect(HamburguerButton()).to.be.a("string");
  });
  it('The HTML markup for the HamburguerButton component must be equal to the specified', () => {
  expect(HamburguerButton()).to.equal(
    `<div class="hamburguer-button">
      <div class="hamburguer-button__bar"></div>
      <div class="hamburguer-button__bar"></div>
      <div class="hamburguer-button__bar"></div>
    </div>`);
  });
  it('The HamburguerButton component must have a class named hamburguer-button', () => {
    expect(HamburguerButtonDOM.className).to.equal("hamburguer-button");
  });
  it('The HamburguerButton component must have 2 child elements', () => {
    expect(HamburguerButtonDOM.children.length).to.equal(3);
  });
});