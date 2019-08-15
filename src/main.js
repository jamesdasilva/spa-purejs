import 'font-awesome/css/font-awesome.css';
import initialState from './helpers/initial-state';
import storeFactory from './core/store-factory';
import viewFactory from './core/view-factory';
import components from './components.list';

// Pages
import LinksExplorer from './pages/links-explorer/links-explorer';

// Observers
import synchronize from './observers/synchronize';
import reloadLinks from './observers/reload-links-from-api';
import setScrollInState from './observers/set-scroll-in-state';
import scrollLinksList from './observers/scroll-links-list';
import focusSearch from './observers/focus-search';
import setTermSearchInState from './observers/set-term-search-in-state';
import updateUpvoteLink from './observers/update-upvote-link';

window.addEventListener('load', function() {

  const store = storeFactory();
  const view = viewFactory(components);

  store.setState(initialState(), false);

  store.subscribe('synchronize', () => {
    synchronize(store);
  });
  store.subscribe('update', () => {
    view.renderPage(store.getState(), LinksExplorer, (event, dataEvent) => {
      view.fire(event, dataEvent);
    });
  });

  store.fire('synchronize');

  view.on('.reload-btn:click', () => {
    reloadLinks(store);
  });
  view.on('.link__icon:click', (dataEvent) => {
    updateUpvoteLink(store, dataEvent)
  });
  view.on('.search__term:input', (dataEvent) => {
    setTermSearchInState(store, dataEvent);
  });
  view.on('.list-of-links__links:scroll', () => {
    setScrollInState(store);
  });
  view.on('update', () => {
    focusSearch(store);
    scrollLinksList(store);
  });

});
