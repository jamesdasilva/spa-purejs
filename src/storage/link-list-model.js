const getSearch = (state) => {
  let { links } = state.data;
  let { searchTerm, initialQtd, offset } = state.UI;

  const searchResult = 
    links.filter(
      item => new RegExp(`^.*${searchTerm}.*$`).test(item.meta.title)
    );
    
  let qtdTotal = searchResult.length;
  let qtdOfLinksLoaded = 
    (initialQtd + offset) <  qtdTotal ? 
    (initialQtd + offset) : qtdTotal;
  
  return {
    ...state,
    UI:{
      ...state.UI,
      links: searchResult,
      qtdTotal: qtdTotal,
      qtdOfLinksLoaded: qtdOfLinksLoaded
    }
  };
};

export default {
    getSearch
};