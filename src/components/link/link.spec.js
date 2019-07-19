import { expect } from 'chai';
import { Link } from './link.component';

describe('Component Link', () => {

  let LinkDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    const props = {
      url: 'url.com',
      count: 3,
      title: "Title test",
      category: "Category test",
      author: "Author test",
      time: "9999999",
      comments: 1
    }; 
    container.innerHTML = Link(props);
    LinkDOM = container.children[0];
  });

  it('Shoult exist the Link instance', () => {
    expect(Link).to.exist;
  });
  it('The call of the Link function should return a string', () => {
    const props = {
      url: 'url.com',
      count: 3,
      title: "Title test",
      category: "Category test",
      author: "Author test",
      time: "9999999",
      comments: 1
    }; 
    expect(Link(props)).to.be.a("string");
  });
  it('The HTML markup for the Link component must be equal to the specified', () => {
    const props = {
      url: 'url.com',
      count: 3,
      title: "Title test",
      category: "Category test",
      author: "Author test",
      time: "9999999",
      comments: 1
    }; 
    expect(Link(props)).to.equal(`<div class="link">
      <div class="link__count-up">
        <div class="link__count-up__icon" data-link-url="url.com"><i class="fa fa-angle-up"></i></div>
        <div class="link__count-up__number">3</div>
      </div>
      <div class="link__content">
        <div class="link__content__url">url.com</div>
        <div class="link__content__title">Title test</div>
        <div class="link__content__meta">
          <div class="link__content__meta__category">Category test</div>
          <div class="link__content__meta__author">Author test</div>
          <div class="link__content__meta__time">9999999</div>
          <div class="link__content__meta__comments">
            1 comment
          </div>
        </div>
      </div>
    </div>`);
  });
  it('Comments must be plural when the number of comments is greater than 1', () => {
    const props = {
      url: 'url.com',
      count: 3,
      title: "Title test",
      category: "Category test",
      author: "Author test",
      time: "9999999",
      comments: 2
    }; 
    expect(Link(props)).to.equal(`<div class="link">
      <div class="link__count-up">
        <div class="link__count-up__icon" data-link-url="url.com"><i class="fa fa-angle-up"></i></div>
        <div class="link__count-up__number">3</div>
      </div>
      <div class="link__content">
        <div class="link__content__url">url.com</div>
        <div class="link__content__title">Title test</div>
        <div class="link__content__meta">
          <div class="link__content__meta__category">Category test</div>
          <div class="link__content__meta__author">Author test</div>
          <div class="link__content__meta__time">9999999</div>
          <div class="link__content__meta__comments">
            2 comments
          </div>
        </div>
      </div>
    </div>`);
  });
  it('The Link component must have a class named link', () => {
    expect(LinkDOM.className).to.equal("link");
  });
  it('The HamburguerButton component must have 2 child elements', () => {
    expect(LinkDOM.children.length).to.equal(2);
  });
});