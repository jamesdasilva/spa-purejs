const setFocus = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      searchFocus: true
    }
  };
};

export default setFocus;
  