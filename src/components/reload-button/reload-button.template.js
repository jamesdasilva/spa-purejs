import './reload-button.scss';

const ReloadButton = (isFetching) => 
    `<div class="reload-btn" id="reload-button">
      <span class="reload-btn__icon-ctnr${isFetching ? ' reload-btn__icon-ctnr--spinning' : ''}">
        <i class="fa fa-refresh"></i>
      </span> Load more
    </div>`;

export default ReloadButton;
