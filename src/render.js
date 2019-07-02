import FooterBrand from './components/footer-brand/footer-brand';
import Credits from './components/credits/credits';
import Layout from './pages/layout/layout';
import User from './components/user/user';
import AddPostButton from './components/add-post-button/add-post-button';
import Logo from './components/logo/logo';
import HamburguerButton from './components/hamburguer-button/hamburguer-button';
import Search from './components/search/search';
import ListOfLinks from './components/list-of-links/list-of-links';
import Loading from './components/loading/loading'

const render = (root, state) => {
  const layout = Layout({
    FooterBrand,
    Credits,
    User,
    AddPostButton,
    Logo,
    HamburguerButton,
    Search,
    ListOfLinks,
    Loading,
    state
  });
  const component = document.createRange().createContextualFragment(layout);
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  root.appendChild(component);
  return root;
};

export default render;
