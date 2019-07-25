const linkHandlers = (document, store) => {
  const links = document.querySelectorAll('.link__count-up__icon');
  links.forEach((link) => { 
    link.addEventListener('click', () => {
      console.log("clicou no uplink", link.dataset["linkId"]);
    });
  });
}

export default linkHandlers;
