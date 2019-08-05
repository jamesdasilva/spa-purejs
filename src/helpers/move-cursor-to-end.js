const moveCursorToEnd = (el) => {
  const { length } = el.value;
  el.setSelectionRange(length, length);
};

export default moveCursorToEnd;
