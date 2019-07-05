const searchLinks = (state) => {
  let term = state.UI.searchTerm;
  return state.data.links.filter(item => new RegExp(`^.*${term}.*$`).test(item.meta.title));
}

export default searchLinks;
