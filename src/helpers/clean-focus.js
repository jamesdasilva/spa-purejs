const cleanFocus = state => ({
  ...state,
  UI: {
    ...state.UI,
    searchFocus: false,
  },
});

export default cleanFocus;
