const setIsFetching = state => ({
  ...state,
  UI: {
    ...state.UI,
    isFetching: false,
  },
});

export default setIsFetching;
