import Loading from './loading.template';

const template = () => `
  <div class="loading">
    <div class="lds-grid">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;

const LoadingComponent = {
  template,
  events: { },
};

export { Loading };
export default LoadingComponent;
