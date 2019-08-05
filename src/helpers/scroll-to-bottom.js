const scrollToBottom = (cntnr) => {
  if (cntnr) {
    cntnr.scrollTop = cntnr.scrollHeight;
  }
};

export default scrollToBottom;
