var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

const queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.rear++] = value;
  this.qsize++;
};

queueMethods.dequeue = function() {
  if (this.rear !== this.front) {
    this.qsize--;
    return this.storage[this.front++];
  }
  return undefined;
};

queueMethods.size = function() {
  return this.qsize;
};

const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {
    storage: {},
    front: 0,
    rear: 0,
    qsize: 0
  };
  extend(queueInstance, queueMethods);
  return queueInstance;
};

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = {
    Queue,
    queueMethods
  };
}
