const setIsFetching = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      isFetching: true
    }
  };
}

export default setIsFetching;
  