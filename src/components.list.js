import AddPostButton from './components/add-post-button/add-post-button';
import Credits from './components/credits/credits';
import FooterBrand from './components/footer-brand/footer-brand';
import HamburguerButton from './components/hamburguer-button/hamburguer-button';
import FiltersLinks from './components/filters-links/filters-links';
import Link, { linkHandlers } from './components/link/link';
import ListOfLinks, { listOfLinksHandlers } from './components/list-of-links/list-of-links';
import Loading from './components/loading/loading';
import LoadingLink from './components/loading-link/loading-link';
import Logo from './components/logo/logo';
import ReloadButton, { reloadButtonHandlers } from './components/reload-button/reload-button';
import Search, { searchHandlers } from './components/search/search';
import User from './components/user/user';

import fetchLinks from './repositories/fetch-links';

import viewFactory from './core/view-factory';

const components_ = {
  AddPostButton,
  Credits,
  FooterBrand,
  HamburguerButton,
  FiltersLinks,
  ListOfLinks,
  Link,
  Loading,
  LoadingLink,
  Logo,
  ReloadButton,
  Search,
  User
};


const appendDOMHandlers = (store) => {
  listOfLinksHandlers(store);
  reloadButtonHandlers(store, fetchLinks);
  searchHandlers(store);
  linkHandlers(store);
};

export { appendDOMHandlers }; 

export default components_;
