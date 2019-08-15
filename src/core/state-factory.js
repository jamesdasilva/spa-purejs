export default function () {
  const subscribes = {
    any: [],
  };
  let state;
  const fire = (event) => {
    const type = event || 'any';
    subscribes[type].forEach((handler) => {
      handler(state);
    });
  };
  const set = (newState, update = true) => {
    state = { ...newState };
    if (update) {
      fire('update');
    }
  };
  const get = () => ({ ...state });
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
  return {
    set,
    get,
    on,
    remove,
    fire,
  };
}
