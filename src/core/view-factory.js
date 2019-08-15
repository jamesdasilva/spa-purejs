import _renderPage from './render-page';

const objIsEmpty = (obj) => Object.keys(obj).length === 0;

const objectToArray = (obj) => Object.keys(obj)
  .map(oKey => ({
    '_key': oKey,
    '_value': obj[`${oKey}`]
  }));

export default function (components, state) {
  const subscribes = {
    any: [],
  };
  const _conatiner = document.querySelector('#root');
  const _components = components;
  const _state = state;

  const fire = (event, dataEvent) => {
    const type = event || 'any';
    subscribes[type] && subscribes[type].forEach((handler) => {
      handler(_state, dataEvent);
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
  const subscribeComponentHandlersInView = (components) => {
    console.log('_components ', components);
    const arrayOfComponents = objectToArray(components);
    const componentsWithHandlers = arrayOfComponents
      .filter(component => component._value.handlers && 
        typeof component._value.handlers === 'object' && 
        !objIsEmpty(component._value.handlers));
    componentsWithHandlers.forEach(item => {
      Object.keys(item._value.handlers).forEach(hKey => {
        item._value.handlers[hKey].forEach(handler => {
          on(hKey, handler)
        });
      });
      console.log('subscribes ', subscribes);
      
    });
  };
  subscribeComponentHandlersInView(_components);
  return {
    on,
    remove,
    fire,
    renderPage,
    subscribes
  };
}
