import loadMore from '../../helpers/load-more';
import setScrollActive from '../../helpers/set-scroll-active';

const reloadButtonHandlers = (document, store) => {
  const button = document.querySelector('.reload-btn');
  button && button.addEventListener('click', function() {
      store.setState(setScrollActive(store.getState(), 'bottom'), false);
      store.setState(loadMore(store.getState()), false);
      store.fire('synchronize');
    });
}

export default reloadButtonHandlers;
