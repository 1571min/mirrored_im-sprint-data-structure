const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.count = 0;
  queueInstance.front = 0;
  queueInstance.rear = 0;
  return queueInstance;
};

const queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.rear++] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.rear !== this.front) {
    this.count--;
    return this.storage[this.front++];
  }
  return undefined;
};

queueMethods.size = function() {
  return this.count;
};

module.exports = {
  Queue,
  queueMethods
};
