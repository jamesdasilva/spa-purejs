import pageMount from './helpers/page-mount';
import storeFactory from './store-factory'
import api from './api';
import './main.scss';
import 'font-awesome/css/font-awesome.css';

let root = document.querySelector('#root');
const store = storeFactory(root);

// estado inicial
store.setState({
  data: {},
  UI: {
    qtdMaxOfLinks: 4,
    qtdOfLinksLoaded: 3,
    isFetching: true
  }
});

// buscar dados persistidos
api().then((newData) => {
  store.setState({
    ...store.getState(), 
    data: {
      ...newData
    },
    UI:{
      ...store.getState().UI,
      isFetching: false
    }
  });
});

// eventos
root.addEventListener('refresh', (e) => {
  pageMount(e.detail, document).then(() => {

    document.querySelector('#reload-button')
      .addEventListener('click', function(){

        store.setState({
          ...store.getState(),
          UI:{
            ...store.getState().UI,
            isFetching: true
          }
        });
        setTimeout(()=>{
          store.setState({
            ...store.getState(),
            UI:{
              ...store.getState().UI,
              qtdOfLinksLoaded: store.getState().UI.qtdOfLinksLoaded + 1
            }
          }, false);
  
          store.setState({
            ...store.getState(),
            UI:{
              ...store.getState().UI,
              isFetching: false
            }
          });
        }, 2000);

      });
  });
});
