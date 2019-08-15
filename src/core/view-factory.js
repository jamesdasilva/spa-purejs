import _renderPage from './render-page';

export default function (components) {
  const subscribes = {
    any: [],
  };
  const _conatiner = document.querySelector('#root');
  const _components = components;
  const fire = (event, dataEvent) => {
    const type = event || 'any';
    subscribes[type] && subscribes[type].forEach((handler) => {
      handler(dataEvent);
    });
  };
  const on = (event, funcObserver) => {
    const type = event || 'any';
    if (typeof subscribes[type] === 'undefined') {
      subscribes[type] = [];
    }
    subscribes[type].push(funcObserver);
  };
  const remove = (event, funcObserver) => {
    const type = event || 'any';
    if (typeof subscribes[type] !== 'undefined') {
      subscribes[type] = subscribes[type].filter(handler => handler !== funcObserver);
    }
  };
  const renderPage = (state, page, callback) => {
    _renderPage(_conatiner, _components, state, page, callback);
    fire('update');
  }
  return {
    on,
    remove,
    fire,
    renderPage,
    subscribes
  };
}
