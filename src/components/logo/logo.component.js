import Logo from './logo.template';

const template = () => `
  <div class="logo">
    <div class="logo__hexagon"></div>
    <div class="logo__text">UX</div>
  </div>`;

const LogoComponent = {
  template,
  events: { },
};

export { Logo };
export default LogoComponent;
