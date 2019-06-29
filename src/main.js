import testing from './components/testing';
import render from './render';
import api from './api';
import '../scss/style.scss';
import 'font-awesome/css/font-awesome.css';

let root = document.querySelector('#root');
let state = {
  data: {},
  UI: {}
};
state.UI.page = 1;
state.UI.numberOfLinksPerPage = 3;
state.UI.isFetching = true;
render(state);

api().then((data) => {
  setTimeout(() => {
    root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
  }, 2000);
});

root.addEventListener('refresh', (e) => {
  state.data = e.detail;
  state.UI.isFetching = false;
  render(state);

  document.querySelector('#reload-button')
  .addEventListener('click', function(){
    state.UI.isFetching = true; 
    state.UI.page = state.UI.page + 1;
    render(state);   
    api().then((data) => {
      setTimeout(() => {
        root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
      }, 2000);
    });
  });
});
