const setTotalCount = (state, totalCount) => ({
  ...state,
  UI: {
    ...state.UI,
    qtdTotal: parseInt(totalCount),
  },
});

export default setTotalCount;
