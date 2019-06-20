const Link = (props) => {
  const {
    count, 
    title, 
    category, 
    comments, 
    time, 
    url, 
    author } = props;

  return `
    <div class="link">
      <div class="link__count-up">
        <div class="link__count-up__icon">X</div>
        <div class="link__count-up__number">${ count }</div>
      </div>
      <div class="link__content">
        <div class="link__content__url">${ url }</div>
        <div class="link__content__title">${ title }</div>
        <div class="link__content__meta">
          <div class="link__content__meta__category">${ category }</div>
          <div class="link__content__meta__author">${ author }Jesse Johnes</div>
          <div class="link__content__meta__time">${ time }3 hours ago</div>
          <div class="link__content__meta__comments">
            ${ comments && comments === 1 ? `${ comments } comment` : `${ comments } comments`}
          </div>
        </div>
      </div>
    </div>
  `;
}

export default Link;
