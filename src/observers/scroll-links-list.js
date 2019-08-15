import scrollToBottom from '../helpers/scroll-to-bottom';
import scrollTo from '../helpers/scroll-to';

const scrollLinksList = (store) => {
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
}

export default scrollLinksList;
