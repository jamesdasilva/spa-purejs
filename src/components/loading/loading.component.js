import './loading.scss'; 

const template = () => `
  <div class="loading">
    <div class="lds-grid">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`;

const Loading = {
  template,
  events: { },
};

export default Loading;
