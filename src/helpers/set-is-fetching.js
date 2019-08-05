const setIsFetching = state => ({
  ...state,
  UI: {
    ...state.UI,
    isFetching: true,
  },
});

export default setIsFetching;
