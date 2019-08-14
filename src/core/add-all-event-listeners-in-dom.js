import objectToArray from './object-to-array';
//import arrayToObject from './array-to-object';
import objIsEmpty from './obj-is-empty';

const addEventListenersOfAComponentInDOM = (componentEvents, callback) => {
  const eventKeys = Object.keys(componentEvents);
  eventKeys.map((eKey) => {
    componentEvents[`${eKey}`].forEach((target) => {
      const elements = document.querySelectorAll(`${target}`);
      elements && elements.forEach((element) => {
        element && element.addEventListener(`${eKey}`, function(event){
          //console.log(`-----`, event);
          //console.log(`-----`, event.currentTarget.dataset.linkId);
          //console.log(`-----`, event.currentTarget.id);
          //console.log(`${target}:${eKey}`);
          callback(`${target}:${eKey}`);
        });
      });
    });
  });
};

const addAllEventListenersInDOM = (components, callback) => {
  const arrayOfComponents = objectToArray(components);
  const componentsWithEvents = arrayOfComponents
    .filter(component => typeof component._value.events === 'object' && !objIsEmpty(component._value.events));
  componentsWithEvents.forEach(item => {
    addEventListenersOfAComponentInDOM(item._value.events, callback);
  });
};

export default addAllEventListenersInDOM;
