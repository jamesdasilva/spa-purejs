const LinksExplorer = (components) => {

  const { state, Logo, Credits, FooterBrand, 
    ListOfLinks, User, AddPostButton, FiltersLinks, Search, Loading} = components;
    
  const bodyContent = state.UI.isFetching && state.UI.links.length == 0 ? Loading() : ListOfLinks(state, components);
  return `
    <div id="app">
      <div id="header">       
        <div class="header__container">
          <div class="header__box-left">
            ${Logo()}
            ${FiltersLinks()}
            ${Search(state.UI.searchTerm)}
          </div>
          <div class="header__box-right">
            ${User()}
            ${AddPostButton()}
          </div>
        </div>
      </div>
      <div id="body">       
        <div class="body__container">
          ${bodyContent}
        </div>
      </div>
      <div id="footer"> 
        <div class="footer__container">
          <div class="footer__box-left">
            ${FooterBrand()}
          </div>
          <div class="footer__box-right">
            ${Credits()}
          </div>
        </div>
      </div>
    </div>`;
}

export default LinksExplorer;
