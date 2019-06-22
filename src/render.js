import FooterBrand from './components/footer-brand/footer-brand';
import Credits from './components/credits/credits';
import Layout from './components/layout/layout';
import User from './components/user/user';
import AddPostButton from './components/add-post-button/add-post-button';
import Logo from './components/logo/logo';
import HamburguerButton from './components/hamburguer-button/hamburguer-button';
import Search from './components/search/search';
import ListOfLinks from './components/list-of-links/list-of-links';
import Loading from './components/loading/loading'

const render = (state) => {
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
  const conatiner = document.querySelector('#root');
  const component = document.createRange().createContextualFragment(layout);
  while (conatiner.firstChild) {
    conatiner.removeChild(conatiner.firstChild);
  }
  conatiner.appendChild(component);
};

export default render;
