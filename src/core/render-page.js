import addAllEventListenersInDOM from './add-all-event-listeners-in-dom';

const cleanContainer = (cntnr) => {
  while (cntnr.firstChild) {
    cntnr.removeChild(cntnr.firstChild);
  }
};

const insertInContainer = (container, layout) => {
  const component = document.createRange().createContextualFragment(layout);
  container.appendChild(component);
};

const renderPage = (container, components, state, page, fireEvent) => {
  cleanContainer(container);
  insertInContainer(container, page({ ...components, state }));
  addAllEventListenersInDOM(components, fireEvent);
};

export default renderPage;
