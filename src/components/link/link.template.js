import './link.scss';

const Link = (props) => {
  const {
    count, title, category, comments, time, url, author, position
  } = props;
  return `<div class="link">
      <div class="link__count-up">
        <div class="link__count-up__icon" data-link-id="${position}"><i class="fa fa-angle-up"></i></div>
        <div class="link__count-up__number">${count}</div>
      </div>
      <div class="link__content">
        <div class="link__content__url">${url}</div>
        <div class="link__content__title">${title}</div>
        <div class="link__content__meta">
          <div class="link__content__meta__category">${category}</div>
          <div class="link__content__meta__author">${author}</div>
          <div class="link__content__meta__time">${time}</div>
          <div class="link__content__meta__comments">
            ${comments && comments === 1 ? `${comments} comment` : `${comments} comments`}
          </div>
        </div>
      </div>
    </div>`;
};

export default Link;
