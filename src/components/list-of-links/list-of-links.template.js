import './list-of-links.scss';

const ListOfLinks = (state, components) => {

  const { ReloadButton, LoadingLink, Link } = components;
  const { qtdOfLinksLoaded, qtdMaxOfLinks } = state.UI;
  const indexLinksStart = qtdOfLinksLoaded > qtdMaxOfLinks ? qtdOfLinksLoaded - qtdMaxOfLinks : 0;
  const indexLinksEnd = qtdOfLinksLoaded;

  let linkWithPagination = state.UI.links ? 
                           state.UI.links.slice(indexLinksStart, indexLinksEnd) : [];

  let LoadingLinkResult = state.UI.isFetching ? LoadingLink() : '';

  console.log(linkWithPagination);
  
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
  
}

export default ListOfLinks;
