const setScroll = (state, newScroll) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      scroll: newScroll
    }
  };
}

export default setScroll;
    