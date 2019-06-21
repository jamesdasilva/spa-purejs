import Link from '../link/link';
import ReloadButton from '../reload-button/reload-button';

const ListOfLinks = (data) => `
  ${data.links.map(item => Link({
    count: item.upvotes,
    title: item.meta.title,
    url: item.meta.url,
    category: item.category,
    comments: item.comments,
    author: item.meta.author,
    time: item.created_at,
  })).join("")}
  ${ReloadButton()}`;

export default ListOfLinks;
