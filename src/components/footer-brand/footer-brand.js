import './footer-brand.scss';
import Logo from '../logo/logo';

const FooterBrand = () => `
  <div class="footer-brand">
    <div class="footer-brand__logo">
      ${Logo()}
    </div>
    <div class="footer-brand__text">
      <div class="footer-brand__title">The UX Library</div>
      <div class="footer-brand__description">Community curated design content & discussion</div>
    </div>
  </div>`;

FooterBrand.events = { };

export default FooterBrand;
