const setScroll = (state, newScroll) => ({
  ...state,
  UI: {
    ...state.UI,
    scroll: newScroll,
  },
});

export default setScroll;
