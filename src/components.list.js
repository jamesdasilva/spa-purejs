import AddPostButtonComponent from './components/add-post-button/add-post-button.component';
import CreditsComponent from './components/credits/credits.component';
import FooterBrandComponent from './components/footer-brand/footer-brand.component';
import HamburguerButtonComponent from './components/hamburguer-button/hamburguer-button.component';
import FiltersLinksComponent from './components/filters-links/filters-links.component';
import LinkComponent, { linkHandlers } from './components/link/link.component';
import ListOfLinksComponent, { listOfLinksHandlers } from './components/list-of-links/list-of-links.component';
import LoadingComponent from './components/loading/loading.component';
import LoadingLinkComponent from './components/loading-link/loading-link.component';
import LogoComponent from './components/logo/logo.component';
import ReloadButtonComponent, { reloadButtonHandlers } from './components/reload-button/reload-button.component';
import SearchComponent, { searchHandlers } from './components/search/search.component';
import UserComponent from './components/user/user.component';

import fetchLinks from './repositories/fetch-links';

const components_ = {
  AddPostButton: AddPostButtonComponent,
  Credits: CreditsComponent,
  FooterBrand: FooterBrandComponent,
  HamburguerButton: HamburguerButtonComponent,
  FiltersLinks: FiltersLinksComponent,
  ListOfLinks: ListOfLinksComponent,
  Link: LinkComponent,
  Loading: LoadingComponent,
  LoadingLink: LoadingLinkComponent,
  Logo: LogoComponent,
  ReloadButton: ReloadButtonComponent,
  Search: SearchComponent,
  User: UserComponent
};


const components = Object.keys(components_).reduce((acc, key) => {
  if(typeof acc === 'object') {
    return {
      ...acc,
      [`${key}`]: components_[`${key}`]['template']
    };
  } else {
    return {
      [`${acc}`]: components_[`${acc}`]['template'],
      [`${key}`]: components_[`${key}`]['template']
    }
  }
});

console.log(LinkComponent.events);

const appendEvents = (c, document) => {
  const events = Object.keys(c);
  events.map((e) => {
    c[`${e}`].forEach((target) => {
      const elements = document.querySelectorAll(`${target}`);
      elements && elements.forEach((element) => {
        element && element.addEventListener(`${e}`, function(event){
          console.log(`-----`, event);
          console.log(`-----`, event.currentTarget.dataset.linkId);
          console.log(`-----`, event.currentTarget.id);
          console.log(`${target}:${e}`);
        });
      });
    });
  });
};

const appendDOMHandlers = (document, store) => {
  listOfLinksHandlers(document, store);
  reloadButtonHandlers(document, store, fetchLinks);
  searchHandlers(document, store);
  linkHandlers(document, store);

  //appendEvents(ListOfLinksComponent.events);
  appendEvents(LinkComponent.events, document);
  //appendEvents(ReloadButtonComponent.events);
  //appendEvents(SearchComponent.events);
};

export { appendDOMHandlers }; 

export default components;
