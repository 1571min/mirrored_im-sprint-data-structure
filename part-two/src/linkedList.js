const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head != null) {
      var nextNode = this.head.next;
      var removeNode = this.head;
      this.head = nextNode;
      return removeNode.value;
    }
  };

  list.contains = function(target) {
    var tempNode = this.head;
    while (tempNode !== null) {
      if (tempNode.value === target) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  };

  return list;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = LinkedList;
