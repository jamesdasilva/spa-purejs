import './reload-button.scss';

const ReloadButton = (isFetching) => `
  <button class="reload-btn" id="reload-button" ${isFetching && 'disabled'}>
    <span class="reload-btn__icon-ctnr${isFetching ? ' reload-btn__icon-ctnr--spinning' : ''}">
      <i class="fa fa-refresh"></i>
    </span> Load more
  </button>`;

ReloadButton.events = {
    click: ['.reload-btn']
};

export default ReloadButton; 
