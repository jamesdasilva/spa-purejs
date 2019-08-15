const getParamsFetchLinks = (state) => {
  const {
    offset, initialQtd, qtdMaxOfLinks, sort, searchTerm,
  } = state.UI;
  const start = (offset + initialQtd) > qtdMaxOfLinks ? (offset + initialQtd) - qtdMaxOfLinks : 0;
  const end = offset + initialQtd;
  return {
    start,
    end,
    sort,
    searchTerm,
  };
};

export default getParamsFetchLinks;
