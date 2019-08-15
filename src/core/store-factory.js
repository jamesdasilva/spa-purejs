export default function () {
  const subscribes = {
    any: [],
  };
  let state;
  const fire = (event) => {
    const type = event || 'any';
    console.log('fire', event);
    subscribes[type].forEach((handler) => {
      handler(state);
    });
  };
  const setState = (newState, update = true) => {
    state = { ...newState };
    console.log('setState');
    if (update) {
      fire('update');
    }
  };
  const getState = () => ({ ...state });
  const subscribe = (event, funcObserver) => {
    const type = event || 'any';
    if (typeof subscribes[type] === 'undefined') {
      subscribes[type] = [];
    }
    subscribes[type].push(funcObserver);
  };
  const unsubscribe = (event, funcObserver) => {
    const type = event || 'any';
    if (typeof subscribes[type] !== 'undefined') {
      subscribes[type] = subscribes[type].filter(handler => handler !== funcObserver);
    }
  };
  return {
    setState,
    getState,
    subscribe,
    unsubscribe,
    fire,
  };
}
