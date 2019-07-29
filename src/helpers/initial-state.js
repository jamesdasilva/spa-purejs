const initialState = () => {
  return {
    UI: {
      searchFocus: false,
      searchTerm: '',
      links: [],
      offset: 0,
      qtdMaxOfLinks: 10,
      initialQtd: 5,
      qtdTotal: 0,
      isFetching: false,
      sort: false,
      scrollActive: 'top',
      scroll: 0,
      displayFilters: false
    }
  };
}

export default initialState;
    