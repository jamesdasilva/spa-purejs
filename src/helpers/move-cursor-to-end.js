const moveCursorToEnd = (el) => {
  let length = el.value.length;  
  el.setSelectionRange(length, length);  
}

export default moveCursorToEnd;
