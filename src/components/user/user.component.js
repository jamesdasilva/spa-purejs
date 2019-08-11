import User from './user.template';

const template = () => `
  <div class="user">
    <img class="user__image" src="https://picsum.photos/id/234/40/40" alt="" />
    <div class="user__count"></div>
  </div>`;

const UserComponent = {
  template,
  events: { },
};

export { User };
export default UserComponent;
