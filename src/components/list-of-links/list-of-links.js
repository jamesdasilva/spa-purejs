import Link from '../link/link';
import ReloadButton from '../reload-button/reload-button';

const ListOfLinks = (state) => {

  let {qtdOfLinksLoaded, qtdMaxOfLinks} = state.UI;
  let indexLinksStart = qtdOfLinksLoaded > qtdMaxOfLinks ? qtdOfLinksLoaded - qtdMaxOfLinks : 0;
  let indexLinksEnd = qtdOfLinksLoaded;

  let linkWithPagination = state.data.links ? 
                           state.data.links.slice(indexLinksStart, indexLinksEnd) : [];
  
  let index = 0;
  let links =  linkWithPagination.length > 0 ? linkWithPagination.map(item => Link({
    count: item.upvotes,
    title: item.meta.title,
    url: item.meta.url,
    category: item.category,
    comments: item.comments,
    author: item.meta.author,
    time: item.created_at,
    position: ++index,
    length: linkWithPagination.length,
    isFetching: state.UI.isFetching
  })).join("") : `<div class="list-of-links__empty">não há resultados</div>`;   
  return `
  <div class="list-of-links">
    <div class="list-of-links__links">
      ${links}
    </div>
    ${ReloadButton(state.UI.isFetching)}</div>`;
  
}

export default ListOfLinks;
