const setIsFetching = (state) => {
  return {
    ...state,
    UI:{
      ...state.UI,
      isFetching: false
    }
  };
}

export default setIsFetching;
