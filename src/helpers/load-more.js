const loadMore = (state) => {
  const { qtdTotal, initialQtd, offset } = state.UI;
  return {
    ...state,
    UI:{
      ...state.UI,
      offset: (offset + initialQtd) < qtdTotal ? offset + 1 : offset 
    }
  };
};

export default loadMore;
  