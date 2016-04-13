'use strict';

var React = require('react-native');

function coalesceNonElementChildren(children, coalesceNodes) {
  var coalescedChildren = [];

  var contiguousNonElements = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      contiguousNonElements.push(child);
      return;
    }

    if (contiguousNonElements.length) {
      coalescedChildren.push(
        coalesceNodes(contiguousNonElements, coalescedChildren.length)
      );
      contiguousNonElements = [];
    }

    coalescedChildren.push(child);
  });

  if (contiguousNonElements.length) {
    coalescedChildren.push(
      coalesceNodes(contiguousNonElements, coalescedChildren.length)
    );
  }

  return coalescedChildren;
}

module.exports = coalesceNonElementChildren;
