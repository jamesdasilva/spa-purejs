const cleanFocus = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      searchFocus: false
    }
  };
};

export default cleanFocus;
  