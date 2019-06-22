import Link from '../link/link';
import ReloadButton from '../reload-button/reload-button';

const ListOfLinks = (data) => {
  let links = data.links && data.links.length > 0 ? data.links.map(item => Link({
    count: item.upvotes,
    title: item.meta.title,
    url: item.meta.url,
    category: item.category,
    comments: item.comments,
    author: item.meta.author,
    time: item.created_at,
  })).join("") : `<div class="link">Não há resultados</div>`;   
  return `
    ${links}
    ${ReloadButton()}`;
}

export default ListOfLinks;
