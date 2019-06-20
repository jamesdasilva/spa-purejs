const Link = () => {
  return `
    <div class="link">
      <div class="link__count-up">
        <div class="link__count-up__icon">X</div>
        <div class="link__count-up__number">10</div>
      </div>
      <div class="link__content">
        <div class="link__content__url">google.com</div>
        <div class="link__content__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at facilis blanditiis asperiores a repudiandae inventore quam nemo</div>
        <div class="link__content__meta">
          <div class="link__content__meta__category">UX Design</div>
          <div class="link__content__meta__author">Jesse Johnes</div>
          <div class="link__content__meta__time">3 hours ago</div>
          <div class="link__content__meta__comments">3 comments</div>
        </div>
      </div>
    </div>
  `;
}

export default Link;
