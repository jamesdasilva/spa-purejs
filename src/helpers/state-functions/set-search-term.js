const updateSearchTerm = (state, value) => ({
  ...state,
  UI: {
    ...state.UI,
    searchFocus: true,
    searchTerm: value,
  },
});

export default updateSearchTerm;
