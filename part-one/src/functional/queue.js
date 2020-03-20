const Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var front = 0;
  var rear = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear++] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (rear !== front) {
      size--;
      return storage[front++];
    }
    return undefined;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue
  };
}
