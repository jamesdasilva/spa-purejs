const setScrollActive = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      scrollActive: true
    }
  };
}

export default setScrollActive;
    