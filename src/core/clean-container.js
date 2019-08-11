const cleanContainer = (cntnr) => {
  while (cntnr.firstChild) {
    cntnr.removeChild(cntnr.firstChild);
  }
};

export default cleanContainer;
