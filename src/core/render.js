import components from '../components.list';

import cleanContainer from '../helpers/clean-container';
import insertInContainer from '../helpers/insert-in-container';

const render = (container, state, Page, callback) => {
  cleanContainer(container);
  insertInContainer(document, container, Page({ ...components, state }));
  callback();
};

export default render;
