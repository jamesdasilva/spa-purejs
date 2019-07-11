import scrollToBottom from '../../helpers/scroll-to-bottom';

const listOfLinksHandlers = (document) => {
  let linksContainer = document.querySelector('.list-of-links__links');
  scrollToBottom(linksContainer);
}

export default listOfLinksHandlers;
