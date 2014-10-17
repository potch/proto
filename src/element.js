var importDoc = document.implementation.createHTMLDocument('');
importDoc.body.innerHTML = require('./element.html');

var BrickElementProto = Object.create(HTMLElement.prototype);
var elementName = 'brick-element';

// Lifecycle methods
BrickElementProto.createdCallback = function () {

  // Create light DOM root from template
  var root = this.root = document.createElement('div');
  root.className = elementName + '-root';
  var template = importDoc.querySelector('template');
  root.appendChild(template.content.cloneNode(true));

  // Move element content into the new root
  var content = root.querySelector('.content');
  while (this.firstChild) {
    content.appendChild(this.firstChild);
  }

  // Handle any initial attributes
  for (var k in attrs) {
    if (this.hasAttribute(k)) {
      attrs[k].call(this, null, this.getAttribute(k));
    }
  }

};

BrickElementProto.attachedCallback = function () {
  this.appendChild(this.root);
};

BrickElementProto.detachedCallback = function () {
  this.root.parentNode.removeChild(this.root);
  this.root = null;
};

BrickElementProto.attributeChangedCallback = function (attr, oldVal, newVal) {
  if (attr in attrs) {
    attrs[attr].call(this, oldVal, newVal);
  }
};

// Custom methods
BrickElementProto.foo = function () {
  console.log("FOO!");
};

// Attribute handlers
var attrs = {
  'title': function (oldVal, newVal) {
    this.root.querySelector('.title').innerHTML = newVal;
  }
};

// Property handlers
Object.defineProperties(BrickElementProto, {
  'title': {
    get: function () {
      return this.root.querySelector('.title').innerHTML;
    },
    set: function (newVal) {
      this.root.querySelector('.title').innerHTML = newVal;
    }
  }
});

// Register the element
var constructor = document.registerElement(elementName, {
  prototype: BrickElementProto
});
if (!window[elementName]) {
  window[elementName] = constructor;
}
