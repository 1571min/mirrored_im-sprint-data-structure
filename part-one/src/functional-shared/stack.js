var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

const stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count !== 0) {
    return this.storage[this.count-- - 1];
  }
  return undefined;
};

stackMethods.size = function() {
  return this.count;
};

const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {
    storage: {},
    count: 0
  };
  extend(stackInstance, stackMethods);
  return stackInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack,
    stackMethods
  };
}
