import { expect } from 'chai';
import { User } from './user.component';

describe('Component User', () => {

  let UserDOM;
  beforeEach(() => {
    const container = document.createElement('div');
    container.innerHTML = User();
    UserDOM = container.children[0];
  });

  it('Shoult exist the User instance', () => {
    expect(User).to.exist;
  });
  it('The call of the User function should return a string', () => {
    expect(User()).to.be.a("string");
  });
  it('The HTML markup for the User component must be equal to the specified', () => {
  expect(User()).to.equal(
    `<div class="user">
      <img class="user__image" src="https://picsum.photos/id/234/40/40" alt="" />
      <div class="user__count"></div>
    </div>`);
  });
  it('The User component must have a class named user', () => {
    expect(UserDOM.className).to.equal("user");
  });
  it('The User component must have 2 child element', () => {
    expect(UserDOM.children.length).to.equal(2);
  });
});