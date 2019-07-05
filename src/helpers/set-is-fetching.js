const getIsFetching = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      isFetching: true
    }
  };
}

export default getIsFetching;
  