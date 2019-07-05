import FooterBrand from './components/footer-brand/footer-brand';
import Credits from './components/credits/credits';
import Layout from './pages/layout/layout';
import User from './components/user/user';
import AddPostButton from './components/add-post-button/add-post-button';
import Logo from './components/logo/logo';
import HamburguerButton from './components/hamburguer-button/hamburguer-button';
import Search from './components/search/search';
import ListOfLinks from './components/list-of-links/list-of-links';
import Loading from './components/loading/loading';

import cleanContainer from './helpers/clean-container';
import insertInContainer from './helpers/insert-in-container';

const render = (container, state) => {
  cleanContainer(container);
  insertInContainer(document, container, Layout({
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
  }));
};

export default render;
