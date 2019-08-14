const arrayToObject = (array) => array
  .reduce((acc, item, index) => {
    if (acc === undefined || typeof acc !== 'object' || typeof item !== 'object' || !item._key) {
      return undefined;
    } else if (index === 1) {
      const key1 = acc._key;
      delete acc._key;
      const key2 = item._key;
      delete item._key;
      return {
        [`${key1}`]: acc._value,
        [`${key2}`]: item._value
      };
    } else {
      const key = item._key;
      delete item._key;
      return {
        ...acc,
        [`${key}`]: item._value
      };
    }
  });

export default arrayToObject;
