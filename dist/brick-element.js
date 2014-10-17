(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<template id="brick-element-template">\n' +
    '    <h1 class="title"></h1>\n' +
    '    <div class="content"></div>\n' +
    '</template>\n' +
    '';
},{}],2:[function(require,module,exports){
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

},{"./element.html":1}]},{},[2]);
