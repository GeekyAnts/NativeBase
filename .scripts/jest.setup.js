// JEST setup file
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { document } = new JSDOM('', { url: 'http://localhost' }).window;

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
