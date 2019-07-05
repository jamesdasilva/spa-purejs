import render from '../render';
import scrollToBottom from './scroll-to-bottom';

const pageMount = (state, document) => {
  render(document.querySelector('#root'), state);
  scrollToBottom(document);
  return Promise.resolve();
};

export default pageMount;
