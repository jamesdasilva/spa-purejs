import Link from '../link/link';
import ReloadButton from '../reload-button/reload-button';

const ListOfLinks = (state) => {

  let {page, numberOfLinksPerPage} = state.UI;
  let linkWithPagination = state.data.links ? state.data.links.slice((page - 1) * numberOfLinksPerPage, page * numberOfLinksPerPage) : [];
  let links =  linkWithPagination.length > 0 ? linkWithPagination.map(item => Link({
    count: item.upvotes,
    title: item.meta.title,
    url: item.meta.url,
    category: item.category,
    comments: item.comments,
    author: item.meta.author,
    time: item.created_at,
  })).join("") : `<div class="list-of-links__empty">não há resultados</div>`;   
  return `
  <div class="list-of-links">
    ${links}
    ${ReloadButton()}</div>`;
  
}

export default ListOfLinks;
