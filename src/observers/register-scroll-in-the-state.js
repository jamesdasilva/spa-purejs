import setScroll from '../helpers/state-functions/set-scroll';

const registerScrollInTheState = (state) => {
  const linksContainer = document.querySelector('.list-of-links__links');
  const scroll = linksContainer.scrollTop;
  state.set(setScroll(state.get(), scroll), false);
};

export default registerScrollInTheState;
