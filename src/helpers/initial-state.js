const initialState = () => {
  return {
    data: { },
    UI: {
      searchFocus: false,
      searchTerm: '',
      links: [],
      offset: 0,
      qtdOfLinksLoaded: 0,
      qtdMaxOfLinks: 4,
      initialQtd: 3,
      qtdTotal: 0,
      isFetching: false
    }
  };
}

export default initialState;
    