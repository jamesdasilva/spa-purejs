import './loading-link.scss';

const template = () => `
  <div class="loading-link">
    <div class="lds-ellipsis">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>`;

const LoadingLink = {
  template,
  events: { },
};

export default LoadingLink;

