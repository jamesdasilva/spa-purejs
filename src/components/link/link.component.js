import Link from './link.template';
import linkHandlers from './link.handlers';

const template = (props) => {
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

const LinkComponent = {
  template,
  events: {
    click: ['.link__icon']
  },
};

export { Link, linkHandlers };
export default LinkComponent;
