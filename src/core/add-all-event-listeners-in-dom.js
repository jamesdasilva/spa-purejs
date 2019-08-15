const objIsEmpty = (obj) => Object.keys(obj).length === 0;

const objectToArray = (obj) => Object.keys(obj)
  .map(oKey => ({
    '_key': oKey,
    '_value': obj[`${oKey}`]
  }));

const addEventListenersOfAComponentInDOM = (componentEvents, callback) => {
  const eventKeys = Object.keys(componentEvents);
  eventKeys.forEach((eKey) => {
    componentEvents[`${eKey}`].forEach((target) => {
      const elements = document.querySelectorAll(`${target}`);
      elements && elements.forEach((element) => {
        element && element.addEventListener(`${eKey}`, function(event){
          callback(`${target}:${eKey}`, { 
            value: this.value,
            dataset: event.currentTarget.dataset || null,
            id: event.currentTarget.id || null 
          });
        });
      });
    });
  });
};

const addAllEventListenersInDOM = (components, callback) => {
  const arrayOfComponents = objectToArray(components);
  const componentsWithEvents = arrayOfComponents
    .filter(component => typeof component._value.events === 'object' && 
    !objIsEmpty(component._value.events));
  componentsWithEvents.forEach(item => {
    addEventListenersOfAComponentInDOM(item._value.events, callback);
  });
};

export default addAllEventListenersInDOM;
