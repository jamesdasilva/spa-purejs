const setScrollActive = (state, mode) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      scrollActive: mode
    }
  };
}

export default setScrollActive;
    