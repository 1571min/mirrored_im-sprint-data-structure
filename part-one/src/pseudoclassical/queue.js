const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.front = 0;
  this.rear = 0;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.rear++] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.rear !== this.front) {
    this.count--;
    return this.storage[this.front++];
  }
  return undefined;
};

Queue.prototype.size = function() {
  return this.count;
};

module.exports = {
  Queue
};
