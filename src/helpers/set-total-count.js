const setTotalCount = (state, totalCount) => ({
  ...state,
  UI: {
    ...state.UI,
    qtdTotal: parseInt(totalCount, 10),
  },
});

export default setTotalCount;
