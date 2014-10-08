
var BrickHeaderProto = Object.create(HTMLElement.prototype);

// Lifecycle methods
BrickHeaderProto.createdCallback = function () {
};

BrickHeaderProto.attachedCallback = function () {
  var header = this;
};

BrickHeaderProto.detachedCallback = function () {
};

BrickHeaderProto.attributeChangedCallback = function (attr, oldVal, newVal) {
  if (attr in attrs) {
    attrs[attr].call(this, oldVal, newVal);
  }
};

// Attribute handlers
var attrs = {
  'attr': function (oldVal, newVal) {
  }
};

// Custom methods
BrickHeaderProto.foo = function () {
};

// Property handlers
Object.defineProperties(BrickHeaderProto, {
  'prop': {
    get: function () {
    },
    set: function (newVal) {
    }
  }
});

// Register the element
var constructor = document.registerElement('brick-header', {
  prototype: BrickHeaderProto
});
if (!window.BrickHeader) {
  window.BrickHeader = constructor;
}
