const cleanScrollActive = state => ({
  ...state,
  UI: {
    ...state.UI,
    scrollActive: false,
  },
});

export default cleanScrollActive;
