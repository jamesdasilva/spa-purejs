import 'font-awesome/css/font-awesome.css';
import initialState from './helpers/initial-state';
import storeFactory from './core/store-factory';
import viewFactory from './core/view-factory';
import components, { appendDOMHandlers } from './components.list';

// Pages
import LinksExplorer from './pages/links-explorer/links-explorer';

// Observers
import synchronize from './observers/synchronize'

window.addEventListener('load', function() {

  const store = storeFactory();
  const view = viewFactory(components);

  store.setState(initialState(), false);

  store.subscribe('synchronize', () => {
    synchronize(store);
  });
  store.subscribe('update', () => {
    view.renderPage(store.getState(), LinksExplorer, (event) => {
      view.fire(event);
      //appendDOMHandlers(store);
    });
  });

  store.fire('synchronize');

  view.on('.reload-btn:click', () => {
    this.console.log('reagindo ao evento .reload-btn:click da view');
  });
  view.on('.link__icon:click', () => {
    this.console.log('reagindo ao evento .link__icon:click da view');
  });
  view.on('.search__term:input', () => {
    this.console.log('reagindo ao evento .search__term:input da view');
  });
  view.on('.list-of-links__links:scroll', () => {
    this.console.log('reagindo ao evento .list-of-links__links:scroll da view');
  });
  view.on('update', () => {
    this.console.log('reagindo ao evento update da view');
  });

  this.console.log('view ', view);

});
