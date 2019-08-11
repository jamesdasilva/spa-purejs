import LoadingLink from './loading-link.template';

const template = () => `
  <div class="loading-link">
    <div class="lds-ellipsis">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>`;

const LoadingLinkComponent = {
  template,
  events: { },
};

export { LoadingLink };
export default LoadingLinkComponent;

