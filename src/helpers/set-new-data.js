const setNewData = (state, newData) => {
  return {
    ...state, 
    UI: {
      ...state.UI,
      links: newData
    }
  };
}

export default setNewData;
  