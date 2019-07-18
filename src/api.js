const api = () => fetch(
  'http://localhost:3000/links', 
  {

  })
  .then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    return data;
  });

export default api;