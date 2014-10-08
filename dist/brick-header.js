(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIEJyaWNrSGVhZGVyUHJvdG8gPSBPYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSk7XG5cbi8vIExpZmVjeWNsZSBtZXRob2RzXG5Ccmlja0hlYWRlclByb3RvLmNyZWF0ZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbkJyaWNrSGVhZGVyUHJvdG8uYXR0YWNoZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWRlciA9IHRoaXM7XG59O1xuXG5Ccmlja0hlYWRlclByb3RvLmRldGFjaGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5Ccmlja0hlYWRlclByb3RvLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyLCBvbGRWYWwsIG5ld1ZhbCkge1xuICBpZiAoYXR0ciBpbiBhdHRycykge1xuICAgIGF0dHJzW2F0dHJdLmNhbGwodGhpcywgb2xkVmFsLCBuZXdWYWwpO1xuICB9XG59O1xuXG4vLyBBdHRyaWJ1dGUgaGFuZGxlcnNcbnZhciBhdHRycyA9IHtcbiAgJ2F0dHInOiBmdW5jdGlvbiAob2xkVmFsLCBuZXdWYWwpIHtcbiAgfVxufTtcblxuLy8gQ3VzdG9tIG1ldGhvZHNcbkJyaWNrSGVhZGVyUHJvdG8uZm9vID0gZnVuY3Rpb24gKCkge1xufTtcblxuLy8gUHJvcGVydHkgaGFuZGxlcnNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJyaWNrSGVhZGVyUHJvdG8sIHtcbiAgJ3Byb3AnOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBSZWdpc3RlciB0aGUgZWxlbWVudFxudmFyIGNvbnN0cnVjdG9yID0gZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdicmljay1oZWFkZXInLCB7XG4gIHByb3RvdHlwZTogQnJpY2tIZWFkZXJQcm90b1xufSk7XG5pZiAoIXdpbmRvdy5Ccmlja0hlYWRlcikge1xuICB3aW5kb3cuQnJpY2tIZWFkZXIgPSBjb25zdHJ1Y3Rvcjtcbn1cbiJdfQ==
