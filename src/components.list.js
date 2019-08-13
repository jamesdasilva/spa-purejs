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

const objectToArray = (obj) => {
  return Object.keys(obj).map(oKey => {
    if(typeof obj[`${oKey}`] === 'object') {
      return {
        'key': oKey,
        ...obj[`${oKey}`]
      };
    } else {
      return {
        'key': oKey,
        'value': obj[`${oKey}`]
      };
    }
  });
};

const arrayToObject = (array) => {
  return array.reduce((acc, item, index) => {
    if (acc === undefined || typeof acc !== 'object' || typeof item !== 'object' || !item.key) {
      return undefined;
    } else if (index === 1) {
      const key1 = acc.key;
      delete acc.key;
      const key2 = item.key;
      delete item.key;
      return {
        [`${key1}`]: acc,
        [`${key2}`]: item
      };
    } else {
      const key = item.key;
      delete item.key;
      return {
        ...acc,
        [`${key}`]: item
      };
    }
  })
};

const isEmpty = (obj) => {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

const arrayOfComponents = objectToArray(components_);

console.log('arrayOfComponents ', arrayOfComponents);

const comps = arrayOfComponents.filter(component => !isEmpty(component.value.events));

console.log('comps ', comps);

const compsObj = arrayToObject(comps);

console.log('compsObj ', compsObj);

console.log(LinkComponent.events);

const appendEvents = (componentEvents, document) => {
  const eventKeys = Object.keys(componentEvents);
  eventKeys.map((eKey) => {
    componentEvents[`${eKey}`].forEach((target) => {
      const elements = document.querySelectorAll(`${target}`);
      elements && elements.forEach((element) => {
        element && element.addEventListener(`${eKey}`, function(event){
          //console.log(`-----`, event);
          //console.log(`-----`, event.currentTarget.dataset.linkId);
          //console.log(`-----`, event.currentTarget.id);
          console.log(`${target}:${eKey}`);
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

  appendEvents(ListOfLinksComponent.events, document);
  appendEvents(LinkComponent.events, document);
  appendEvents(ReloadButtonComponent.events, document);
  appendEvents(SearchComponent.events, document);
};

export { appendDOMHandlers }; 

export default components_;
