import testing from './components/testing';
import render from './render';
import api from './api';

let root = document.querySelector('#root');
let state = {
  data: {},
  UI: {}
}
state.UI.isFetching = true;
console.log('state1', state);
render(state);

api().then((data) => {
  setInterval(() => {
    root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
  }, 2000);
});

root.addEventListener('refresh', (e) => {
  state.data = e.detail;
  state.UI.isFetching = false;
  render(state);

  console.log('state3', state);

  document.querySelector('#reload-button')
  .addEventListener('click', function(){
    console.log('Testando');
    state.UI.isFetching = true; 
    render(state);   
    api().then((data) => {
      setInterval(() => {
        root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
      }, 2000);
    });
  });
});

testing()('Leroy Merlin Test 123553');
