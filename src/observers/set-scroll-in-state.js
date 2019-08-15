import setScroll from '../helpers/set-scroll';

const setScrollInState = (store) => {
  let linksContainer = document.querySelector('.list-of-links__links');
  let scroll = linksContainer.scrollTop;
  store.setState(setScroll(store.getState(), scroll), false);
};

export default setScrollInState;
