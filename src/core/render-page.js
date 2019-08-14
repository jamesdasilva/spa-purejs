import cleanContainer from './clean-container';
import insertInContainer from './insert-in-container';
import addAllEventListenersInDOM from './add-all-event-listeners-in-dom';

const render = (container, components, state, Page, callback) => {
  cleanContainer(container);
  insertInContainer(document, container, Page({ ...components, state }));
  addAllEventListenersInDOM(components, callback);
};

export default render;
