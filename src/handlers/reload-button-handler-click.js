const exposeReloadButtonHandlerClick = (state, document) => {
  document.querySelector('#reload-button')
  .addEventListener('click', function(){
    state.UI.isFetching = true;
    state.UI.numberOfLinksPerPage++;
    render(state);
    scrollToBottom(document);
    api().then((data) => {
      setTimeout(() => {
        console.log("refresh", state);
        root.dispatchEvent(new CustomEvent('refresh', { detail: data }));
      }, 2000);
    });
  });
}

export default exposeReloadButtonHandlerClick;