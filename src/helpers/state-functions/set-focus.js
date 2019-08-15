const setFocus = state => ({
  ...state,
  UI: {
    ...state.UI,
    searchFocus: true,
  },
});

export default setFocus;
