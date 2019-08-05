const getSearch = (state) => {
  const { links } = state.data;
  const { searchTerm, initialQtd, offset } = state.UI;
  const searchTermUpperCase = searchTerm.toUpperCase();
  const searchResult = Array.isArray(links) && links.length > 0 && links.filter(
    item => new RegExp(`^.*${searchTermUpperCase}.*$`).test(item.meta.title.toUpperCase()),
  );
  const qtdTotal = searchResult.length;
  const qtdOfLinksLoaded = (initialQtd + offset) < qtdTotal ? (initialQtd + offset) : qtdTotal;
  return {
    ...state,
    UI: {
      ...state.UI,
      links: searchResult,
      qtdTotal,
      qtdOfLinksLoaded,
    },
  };
};

export default getSearch;
