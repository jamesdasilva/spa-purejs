import ListOfLinks from './list-of-links.template';
import listOfLinksHandlers from './list-of-links.handlers';

const ListOfLinksComponent = {
  template: ListOfLinks,
  events: {
    scroll: ['.list-of-links__links']
  },
};

export { ListOfLinks, listOfLinksHandlers};
export default ListOfLinksComponent;
