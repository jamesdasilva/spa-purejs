import { AddPostButton } from './components/add-post-button/add-post-button.component';
import { Credits } from './components/credits/credits.component';
import { FooterBrand } from './components/footer-brand/footer-brand.component';
import { HamburguerButton } from './components/hamburguer-button/hamburguer-button.component';
import { FiltersLinks } from './components/filters-links/filters-links.component';
import { Link, linkHandlers } from './components/link/link.component';
import { ListOfLinks, listOfLinksHandlers } from './components/list-of-links/list-of-links.component';
import { Loading } from './components/loading/loading.component';
import { LoadingLink } from './components/loading-link/loading-link.component';
import { Logo } from './components/logo/logo.component';
import { ReloadButton, reloadButtonHandlers } from './components/reload-button/reload-button.component';
import { Search, searchHandlers } from './components/search/search.component';
import { User } from './components/user/user.component';

import fetchLinks from './fetch-links';


const components = {
  AddPostButton,
  Credits,
  FooterBrand,
  HamburguerButton,
  FiltersLinks,
  Link,
  ListOfLinks,
  Loading,
  LoadingLink,
  Logo,
  ReloadButton,
  Search,
  User
};

const appendDOMHandlers = (document, store) => {
  listOfLinksHandlers(document, store);
  reloadButtonHandlers(document, store, fetchLinks);
  searchHandlers(document, store);
  linkHandlers(document, store);
};

export { appendDOMHandlers }; 

export default components;
