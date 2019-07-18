import { expect } from 'chai';
import { FooterBrand } from './footer-brand.component';

describe('Component FooterBrand', () => {

  let FooterBrandDOM;
  beforeEach(() => {
    const FooterBrandDOMContainer = document.createElement('div');
    FooterBrandDOMContainer.innerHTML = FooterBrand();
    FooterBrandDOM = FooterBrandDOMContainer.children[0];
  });

  it('Shoult exist the FooterBrand instance', () => {
    expect(FooterBrand).to.exist;
  });
  it('The call of the FooterBrand function should return a string', () => {
    expect(FooterBrand()).to.be.a("string");
  });
  it('The HTML markup for the FooterBrand component must be equal to the specified', () => {
  expect(FooterBrand()).to.equal(
    `<div class="footer__brand">
      <div class="footer__brand__logo">
        <div class="logo">
          <div class="logo__hexagon"></div>
          <div class="logo__text">UX</div>
        </div>
      </div>
      <div class="footer__brand__text">
        <div class="footer__brand__text__title">The UX Library</div>
        <div class="footer__brand__text__desciption">Community curated design content & discussion</div>
      </div>
    </div>`);
  });
  it('The FooterBrand component must have a class named footer__brand', () => {
    expect(FooterBrandDOM.className).to.equal("footer__brand");
  });
  it('The FooterBrand component must have 2 child elements', () => {
    expect(FooterBrandDOM.children.length).to.equal(2);
  });
});