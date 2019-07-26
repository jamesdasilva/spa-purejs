const cleanScrollActive = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      scrollActive: false
    }
  };
}

export default cleanScrollActive;
    