const insertInContainer = (document, root, layout) => {
  const component = document.createRange().createContextualFragment(layout);
  root.appendChild(component);
}

export default insertInContainer;
