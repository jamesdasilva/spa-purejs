import scrollToBottom from '../helpers/scroll-to-bottom';
import scrollTo from '../helpers/scroll-to';

const scrollLinksList = (state) => {
  const linksContainer = document.querySelector('.list-of-links__links');
  if (!state.get().UI.scrollActive) {
    scrollTo(linksContainer, state.get().UI.scroll);
  } else {
    switch (state.get().UI.scrollActive) {
      case 'bottom': 
        scrollToBottom(linksContainer);
        break;
      case 'top': 
        scrollTo(linksContainer, 0);
        break;
    }
  }
}

export default scrollLinksList;
