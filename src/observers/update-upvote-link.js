import updateLink from '../repositories/update-link';

const updateUpvotesLink = (state, dataEvent) => {
  const { linkId } = dataEvent.dataset;
  const selectedLink = state.get().UI.links.find( item => item.id == linkId );
  updateLink({
    linkId: linkId, 
    data: {
      ...selectedLink,
      upvotes: selectedLink.upvotes + 1
    } 
  }).then(() => {
    state.fire('synchronize');
  });
}

export default updateUpvotesLink;
