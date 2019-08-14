const objectToArray = (obj) => Object.keys(obj)
  .map(oKey => ({
    '_key': oKey,
    '_value': obj[`${oKey}`]
  }));

export default objectToArray;
