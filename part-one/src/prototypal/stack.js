const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.storage = {};
  stackInstance.count = 0;
  return stackInstance;
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

module.exports = {
  Stack,
  stackMethods
};

// var someMethods = {};
// someMethods.move = function () {
//   this.position += 1;
// };

// var Car = function (position) {
//   var someInstance = Object.create(someMethods);
//   someInstance.position = position;
//   return someInstance;
// }
// var car1 = Car(5);
