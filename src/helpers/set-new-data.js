const setNewData = (state, newData) => {
  return {
    ...state, 
    data: {
      ...newData
    }
  };
}

export default setNewData;
  