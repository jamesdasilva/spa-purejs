import updateLink from '../../repositories/update-link';

const linkHandlers = (document, store) => {
  const links = document.querySelectorAll('.link__icon');
  links.forEach((link) => { 
    link.addEventListener('click', () => {
      const selectedLink = store.getState().UI.links.find( item => item.id == link.dataset["linkId"] );
      updateLink({
        linkId: link.dataset["linkId"], 
        data: {
          ...selectedLink,
          upvotes: selectedLink.upvotes + 1
        } 
      }).then(() => {
        store.fire('synchronize');
      });
    });
  });
}

export default linkHandlers;
