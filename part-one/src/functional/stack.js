const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count !== 0) {
      return storage[count-- - 1];
    }
    return undefined;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Stack
  };
}
