import { expect } from 'chai';
import { AddPostButton } from './add-post-button.component';

describe('Component AddPostButton', () => {
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
});