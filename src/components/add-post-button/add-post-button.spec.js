import { expect } from 'chai';
import { AddPostButton } from './add-post-button.component';

describe('Component AddPostButton', () => {

  let AddPostButtonDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = AddPostButton();
    AddPostButtonDOM = container.children[0];
  });

  it('Shoult exist the AddPostButton instance', () => {
    expect(AddPostButton).to.exist;
  });
  it('The call of the AddPostButton function should return a string', () => {
    expect(AddPostButton()).to.be.a("string");
  });
  it('The HTML markup for the AddPostButton component must be equal to the specified', () => {
  expect(AddPostButton()).to.equal(
    `<div class="add-post-button">
      <div class="add-post-button__icon"><i class="fa fa-plus"></i></div>
      <div class="add-post-button__text">Add Post</div>
    </div>`);
  });
  it('The AddPostButton component must have a class named add-post-button', () => {
    expect(AddPostButtonDOM.className).to.equal("add-post-button");
  });
  it('The AddPostButton component must have 2 child elements', () => {
    expect(AddPostButtonDOM.children.length).to.equal(2);
  });
});