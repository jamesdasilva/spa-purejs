export default function (root){
  let state;
  let containerHTML = root;
  let setState = function(newState, refresh = true){
    state = {...newState};
    if(refresh)
      containerHTML.dispatchEvent(new CustomEvent('refresh', { detail: state }));
  }
  let getState = function(){
    return {...state};
  }
  return {
    setState: setState,
    getState: getState
  }
  
}