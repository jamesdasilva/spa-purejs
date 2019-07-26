import scrollToBottom from '../../helpers/scroll-to-bottom';
import scrollTo from '../../helpers/scroll-to';
import setScroll from '../../helpers/set-scroll';

const listOfLinksHandlers = (document, store) => {
  let linksContainer = document.querySelector('.list-of-links__links');
  if(!store.getState().UI.scrollActive){
    scrollTo(linksContainer, store.getState().UI.scroll);
  }else{
    switch(store.getState().UI.scrollActive){
      case 'bottom': 
        scrollToBottom(linksContainer);
        break;
      case 'top': 
        scrollTo(linksContainer, 0);
        break;
    }
  }
  linksContainer && linksContainer.addEventListener('scroll', function() {
      let scroll = linksContainer.scrollTop;
      store.setState(setScroll(store.getState(), scroll), false);
    });
}

export default listOfLinksHandlers;
