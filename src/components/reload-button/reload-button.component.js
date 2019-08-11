import ReloadButton from './reload-button.template';
import reloadButtonHandlers from './reload-button.handlers';

const template = (isFetching) => `
  <button class="reload-btn" id="reload-button" ${isFetching && 'disabled'}>
    <span class="reload-btn__icon-ctnr${isFetching ? ' reload-btn__icon-ctnr--spinning' : ''}">
      <i class="fa fa-refresh"></i>
    </span> Load more
  </button>`;

const ReloadButtonComponent = {
  template,
  events: {
    click: ['.reload-btn']
  },
};

export { ReloadButton, reloadButtonHandlers };
export default ReloadButtonComponent; 
