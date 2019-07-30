export default function (root){
  const subscribes = {
    any: []
  };
  let state;
  const containerHTML = root;
  const setState = function(newState, update = true){
    state = {...newState};
    if(update){
      fire('update');
    }
  }
  const getState = function(){
    return {...state};
  }
  const fire = function(event){
    //containerHTML.dispatchEvent(new CustomEvent(event, { detail: state }));
    const type = event || 'any';
    console.log('fire subscribe', subscribes);
    console.log('type', type);
    console.log(`subscribes[${type}]`, subscribes[type]);
    subscribes[type].forEach(handler => {
      handler(state);
    });
  }
  const subscribe = function(event, funcObserver){
    //containerHTML.addEventListener(event, funcObserver);
    const type = event || 'any';
    if(typeof subscribes[type] === 'undefined'){
      subscribes[type] = [];
    }
    subscribes[type].push(funcObserver);
  }
  const unsubscribe = function(event, funcObserver){
    //containerHTML.removeEventListener(event, funcObserver);
    const type = event || 'any';
    if(typeof subscribes[type] !== 'undefined'){
      subscribes[type] = subscribes[type].filter(handler => {
        return handler !== funcObserver
      });
    }
  }
  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    fire: fire
  }
}
