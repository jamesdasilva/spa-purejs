import { expect } from 'chai';
import { Credits } from './credits.component';

describe('Component Credits', () => {

  let CreditsDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = Credits();
    CreditsDOM = container.children[0];
  });

  it('Shoult exist the Credits instance', () => {
    expect(Credits).to.exist;
  });
  it('The call of the Credits function should return a string', () => {
    expect(Credits()).to.be.a("string");
  });
  it('The HTML markup for the Credits component must be equal to the specified', () => {
  expect(Credits()).to.equal(
    `<div class="credits">
      <div class="credits__links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Sign in</a>
      </div>
      <div class="credits__copyright">C 2014 - The UX Library</div>
    </div>`);
  });
  it('The Credits component must have a class named credits', () => {
    expect(CreditsDOM.className).to.equal("credits");
  });
  it('The Credits component must have 2 child elements', () => {
    expect(CreditsDOM.children.length).to.equal(2);
  });
});