import 'font-awesome/css/font-awesome.css';
import setInitialState from './helpers/state-functions/set-initial-state';
import stateFactory from './core/state-factory';
import viewFactory from './core/view-factory';
import components from './components.list';

// Pages
import LinksExplorer from './pages/links-explorer/links-explorer';

// Observers
import synchronize from './observers/synchronize-with-api';
import reloadLinksFromAPI from './observers/reload-links-from-api';
import registerScrollInTheState from './observers/register-scroll-in-the-state';
import scrollLinksList from './observers/scroll-links-list';
import keepFocusOnTheSearch from './observers/keep-focus-on-the-search';
import setTermSearchInState from './observers/register-search-term-in-the-state';
import updateUpvoteLink from './observers/update-upvote-link';

window.addEventListener('load', function() {

  const state = stateFactory();
  const view = viewFactory(components);

  state.set(setInitialState(), false);

  state.on('synchronize', () => {
    synchronize(state);
  });
  state.on('update', () => {
    view.renderPage(state.get(), LinksExplorer, (event, dataEvent) => {
      view.fire(event, dataEvent);
    });
  });

  state.fire('synchronize');

  view.on('.reload-btn:click', () => {
    reloadLinksFromAPI(state);
  });
  view.on('.link__icon:click', (dataEvent) => {
    updateUpvoteLink(state, dataEvent)
  });
  view.on('.search__term:input', (dataEvent) => {
    setTermSearchInState(state, dataEvent);
  });
  view.on('.list-of-links__links:scroll', () => {
    registerScrollInTheState(state);
  });
  view.on('update', () => {
    keepFocusOnTheSearch(state);
    scrollLinksList(state);
  });

});
