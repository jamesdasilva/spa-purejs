import './add-post-button.scss';

const template = () => `
  <div class="add-post-button">
    <div class="add-post-button__icon"><i class="fa fa-plus"></i></div>
    <div class="add-post-button__text">Add Post</div>
  </div>`;

const AddPostButton = {
  template,
  events: { },
};

export default AddPostButton;
