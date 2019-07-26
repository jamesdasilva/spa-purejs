import updateLink from '../../update-link';
import fetchLinks from '../../fetch-links';
import setTotalCount from '../../helpers/set-total-count';
import setIsFetching from '../../helpers/set-is-fetching';
import clearIsFetching from '../../helpers/clear-is-fetching';
import setNewData from '../../helpers/set-new-data';
import cleanScrollActive from '../../helpers/clean-scroll-active';
import setScrollActive from '../../helpers/set-scroll-active';
import generateParamsFetchLinks from '../../helpers/generate-params-fetch-links';

const linkHandlers = (document, store) => {
  const links = document.querySelectorAll('.link__count-up__icon');
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
        const paramers = generateParamsFetchLinks(store.getState());
        fetchLinks(paramers).then((newData) => {
          store.setState(cleanScrollActive(store.getState()), false);
          store.setState(setTotalCount(store.getState(), newData.count), false);
          newData.links.then(links => {
            store.setState(cleanScrollActive(store.getState()), false);
            store.setState(setNewData({ ...store.getState() }, links));
            store.setState(setScrollActive(store.getState(), true), false);
          });
        });
      });
      
    });
  });
}

export default linkHandlers;
