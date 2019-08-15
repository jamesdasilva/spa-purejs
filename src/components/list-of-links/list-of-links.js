import './list-of-links.scss';
import setScroll from '../../helpers/state-functions/set-scroll';

const ListOfLinks = (state, components) => {

  const { ReloadButton, LoadingLink, Link } = components;
  const { qtdOfLinksLoaded, qtdMaxOfLinks } = state.UI;
  const indexLinksStart = qtdOfLinksLoaded > qtdMaxOfLinks ? qtdOfLinksLoaded - qtdMaxOfLinks : 0;
  const indexLinksEnd = qtdOfLinksLoaded;

  let linkWithPagination = state.UI.links ? 
                           state.UI.links.slice(indexLinksStart, indexLinksEnd) : [];

  let LoadingLinkResult = state.UI.isFetching ? LoadingLink() : '';
  
  let links =  linkWithPagination.length > 0 ? linkWithPagination.map(item => Link({
    count: item.upvotes,
    title: item.meta.title,
    url: item.meta.url,
    category: item.category,
    comments: item.comments,
    author: item.meta.author,
    time: item.created_at,
    position: item.id,
    length: linkWithPagination.length,
    isFetching: state.UI.isFetching
  })).join("") : `<div class="list-of-links__empty">não há resultados</div>`;   
  return `
  <div class="list-of-links">
    <div class="list-of-links__links">
      ${links}
      ${LoadingLinkResult}
    </div>
    ${ReloadButton(state.UI.isFetching)}</div>`;
};

const registerScrollInTheState = (state) => {
  const linksContainer = document.querySelector('.list-of-links__links');
  const scroll = linksContainer.scrollTop;
  state.set(setScroll(state.get(), scroll), false);
};

const scrollTo = (cntnr, newScroll) => {
  if (cntnr) {
    cntnr.scrollTop = newScroll;
  }
};

const scrollToBottom = (cntnr) => {
  if (cntnr) {
    cntnr.scrollTop = cntnr.scrollHeight;
  }
};

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

ListOfLinks.events = {
  scroll: ['.list-of-links__links']
};

ListOfLinks.handlers = {
  '.list-of-links__links:scroll': [registerScrollInTheState],
  'update': [scrollLinksList]
}

export default ListOfLinks;
