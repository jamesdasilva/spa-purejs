import './reload-button.scss';
import nextOffset from '../../helpers/state-functions/next-offset';
import setScrollActive from '../../helpers/state-functions/set-scroll-active';

const ReloadButton = (isFetching) => `
  <button class="reload-btn" id="reload-button" ${isFetching && 'disabled'}>
    <span class="reload-btn__icon-ctnr${isFetching ? ' reload-btn__icon-ctnr--spinning' : ''}">
      <i class="fa fa-refresh"></i>
    </span> Load more
  </button>`;

const reloadLinksFromAPI = (state) => {
  state.set(setScrollActive(state.get(), 'bottom'), false);
  state.set(nextOffset(state.get()), false);
  state.fire('synchronize');
};

ReloadButton.events = {
    click: ['.reload-btn']
};

ReloadButton.handlers = {
  '.reload-btn:click': [reloadLinksFromAPI]
}

export default ReloadButton; 
