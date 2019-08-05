const fetchLinks = ({start, end, sort, searchTerm}) => {
  const baseUrl = 'http://localhost:3000/links';
  const path = [];
  if(start){
    path.push(`_start=${start - 1}`);
  }
  if(end){
    path.push(`_end=${end}`);
  }
  if(sort){
    path.push(`_sort=${sort}`);
  }
  if(searchTerm && searchTerm !== ''){
    path.push(`q=${searchTerm}`);
  }
  const url = `${baseUrl}?${path.join('&')}`;
  console.log("url ", url);
  return fetch(url)
  .then((response) => {
    return {
      links: response.json(),
      count: response.headers.get("X-Total-Count")
    }
  })
  .then((data) => data)
  .catch(() => []);
};

export default fetchLinks;
