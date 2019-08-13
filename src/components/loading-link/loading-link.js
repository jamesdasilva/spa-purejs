import './loading-link.scss';

const LoadingLink = () => `
  <div class="loading-link">
    <div class="lds-ellipsis">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>`;

LoadingLink.events = { };

export default LoadingLink;

