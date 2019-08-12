import './footer-brand.scss';
import Logo from '../logo/logo.component';

const template = () => `
  <div class="footer-brand">
    <div class="footer-brand__logo">
      ${Logo.template()}
    </div>
    <div class="footer-brand__text">
      <div class="footer-brand__title">The UX Library</div>
      <div class="footer-brand__description">Community curated design content & discussion</div>
    </div>
  </div>`;

const FooterBrand = {
  template,
  events: { },
};

export default FooterBrand;
