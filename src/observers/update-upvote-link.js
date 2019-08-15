import updateLink from '../repositories/update-link';

const updateUpvotesLink = (store, dataEvent) => {
  const { linkId } = dataEvent.dataset;
  const selectedLink = store.getState().UI.links.find( item => item.id == linkId );
  updateLink({
    linkId: linkId, 
    data: {
      ...selectedLink,
      upvotes: selectedLink.upvotes + 1
    } 
  }).then(() => {
    store.fire('synchronize');
  });
}

export default updateUpvotesLink;
