const api = () => fetch('https://www.mocky.io/v2/5a6bc16631000078341b8b77')
  .then((response) => response.json());

export default api;