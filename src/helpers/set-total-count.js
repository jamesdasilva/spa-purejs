const setTotalCount = (state, totalCount) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      qtdTotal: parseInt(totalCount)
    }
  }
};

export default setTotalCount;
