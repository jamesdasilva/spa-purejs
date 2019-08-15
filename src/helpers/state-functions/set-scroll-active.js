const setScrollActive = (state, mode) => ({
  ...state,
  UI: {
    ...state.UI,
    scrollActive: mode,
  },
});

export default setScrollActive;
