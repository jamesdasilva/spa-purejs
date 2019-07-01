import render from './render';
import api from './api';
import './main.scss';
import 'font-awesome/css/font-awesome.css';

let root = document.querySelector('#root');

let linksContainer;

let state = {
  data: {},
  UI: {}
};
state.UI.page = 1;
state.UI.numberOfLinksPerPage = 3;
state.UI.isFetching = true;
render(state);
linksContainer = document.querySelector('.list-of-links__links');
if(linksContainer)
  linksContainer.scrollTop = linksContainer.scrollHeight;

api().then((data) => {
  setTimeout(() => {
    root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
  }, 1000);
});

root.addEventListener('refresh', (e) => {
  state.data = e.detail;
  state.UI.isFetching = false;
  render(state);
  linksContainer = document.querySelector('.list-of-links__links');
  if(linksContainer)
    linksContainer.scrollTop = linksContainer.scrollHeight;
  document.querySelector('#reload-button')
  .addEventListener('click', function(){
    state.UI.isFetching = true;
    state.UI.numberOfLinksPerPage++;
    render(state);
    linksContainer = document.querySelector('.list-of-links__links');
    if(linksContainer)
      linksContainer.scrollTop = linksContainer.scrollHeight;
    api().then((data) => {
      setTimeout(() => {
        console.log("refresh", state);
        root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
      }, 2000);
    });
  });
});
