const initialState = () => {
  return {
    UI: {
      searchFocus: false,
      searchTerm: '',
      links: [],
      offset: 0,
      qtdMaxOfLinks: 10,
      initialQtd: 3,
      qtdTotal: 0,
      isFetching: false,
      sort: false,
      scrollActive: true,
      scroll: 0
    }
  };
}

export default initialState;
    