import scrollToBottom from '../../helpers/scroll-to-bottom';
import scrollTo from '../../helpers/scroll-to';
import setScroll from '../../helpers/set-scroll';

const listOfLinksHandlers = (document, store) => {
  let linksContainer = document.querySelector('.list-of-links__links');
  if(store.getState().UI.scrollActive){
    scrollToBottom(linksContainer);
  }else{
    scrollTo(linksContainer, store.getState().UI.scroll);
  }
  document.querySelector('.list-of-links__links')
    .addEventListener('scroll', function() {
      let scroll = document.querySelector('.list-of-links__links').scrollTop;
      store.setState(setScroll(store.getState(), scroll), false);
    });
}

export default listOfLinksHandlers;
