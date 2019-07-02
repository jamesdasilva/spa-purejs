const setState = (root, state, newState) => {
  setTimeout(() => {
    state = newState;
    root.dispatchEvent(new CustomEvent('refresh', { detail: state }));
  }, 1000);
}

export default setState;
