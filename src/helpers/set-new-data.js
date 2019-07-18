const setNewData = (state, newData) => {
  return {
    ...state, 
    data: {
      links: newData
    }
  };
}

export default setNewData;
  