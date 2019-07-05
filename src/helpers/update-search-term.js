const updateSearchTerm = (state, value) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      searchFocus: true,
      searchTerm: value
    }
  }
};

export default updateSearchTerm;
    