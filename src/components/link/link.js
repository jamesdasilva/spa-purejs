import './link.scss';
import updateLink from '../../repositories/update-link';

const Link = (props) => {
  const {
    count, title, category, comments, time, url, author, position
  } = props;
  return `
    <div class="link">
      <div class="link__count-up">
        <div class="link__icon" id="_t${position}" data-link-id="${position}">
          <i class="fa fa-angle-up"></i>
        </div>
        <div class="link__number">${count}</div>
      </div>
      <div class="link__content">
        <div class="link__url">${url}</div>
        <div class="link__title">${title}</div>
        <div class="link__meta">
          <div class="link__category">${category}</div>
          <div class="link__author">${author}</div>
          <div class="link__time">${time}</div>
          <div class="link__comments">
            ${comments && comments === 1 ? `${comments} comment` : `${comments} comments`}
          </div>
        </div>
      </div>
    </div>`;
};

const updateUpvotesLink = (state, dataEvent) => {
  const { linkId } = dataEvent.dataset;
  const selectedLink = state.get().UI.links.find( item => item.id == linkId );
  updateLink({
    linkId: linkId, 
    data: {
      ...selectedLink,
      upvotes: selectedLink.upvotes + 1
    } 
  }).then(() => {
    state.fire('synchronize');
  });
}

Link.events = {
  click: ['.link__icon']
};

Link.handlers = {
  '.link__icon:click': [updateUpvotesLink]
}

export default Link;
