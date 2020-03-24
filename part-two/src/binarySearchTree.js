const BinarySearchTree = function(value) {
  const newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  extend(newTree, treeMethods);
  return newTree;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
const treeMethods = {};
treeMethods.insert = function(value) {
  if (this.value === undefined) {
    this.value = value;
  } else {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.insert.bind(this.left)(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.insert.bind(this.right)(value);
      }
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.value > target) {
      if (this.left !== null) return this.left.contains(target);
    } else {
      if (this.right !== null) return this.right.contains(target);
    }
  }
  return false;
};

treeMethods.depthFirstLog = function(value) {
  value(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(value);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = BinarySearchTree;

module.exports = BinarySearchTree;
