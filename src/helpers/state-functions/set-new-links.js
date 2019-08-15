const setNewData = (state, newData) => ({
  ...state,
  UI: {
    ...state.UI,
    links: newData,
  },
});

export default setNewData;
