const updateLink = ({linkId, data}) => {
  const baseUrl = 'http://localhost:3000/links';
  const url = `${baseUrl}/${linkId}`;

  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => data)
  .catch(() => []);
};

export default updateLink;
