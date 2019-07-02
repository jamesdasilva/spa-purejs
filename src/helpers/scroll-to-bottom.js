const scrollToBottom = (document) => {
  let linksContainer = document.querySelector('.list-of-links__links');
  if(linksContainer)
    linksContainer.scrollTop = linksContainer.scrollHeight;
}

export default scrollToBottom;
