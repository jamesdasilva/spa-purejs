export default function () {
  const subscribes = {
    any: [],
  };
  const fire = (event) => {
    const type = event || 'any';
    subscribes[type].forEach((handler) => {
      handler();
    });
  };
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
    subscribe,
    unsubscribe,
    fire,
  };
}
