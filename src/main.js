import 'font-awesome/css/font-awesome.css';
import setInitialState from './helpers/state-functions/set-initial-state';
import stateFactory from './core/state-factory';
import viewFactory from './core/view-factory';
import components from './components.list';

// Pages
import LinksExplorer from './pages/links-explorer/links-explorer';

// Observers
import synchronize from './observers/synchronize-with-api';

window.addEventListener('load', function() {

  const state = stateFactory();
  const view = viewFactory(components, state);

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

  view.on('.reload-btn:click', (state, dataEvent) => {
    //reloadLinksFromAPI(state);
  });
  view.on('.link__icon:click', (state, dataEvent) => {
    //updateUpvoteLink(state, dataEvent)
  });
  view.on('.search__term:input', (state, dataEvent) => {
    //setTermSearchInState(state, dataEvent);
  });
  view.on('.list-of-links__links:scroll', (state, dataEvent) => {
    //registerScrollInTheState(state);
  });
  view.on('update', (state) => {
    //keepFocusOnTheSearch(state);
    //scrollLinksList(state);
  });

});
