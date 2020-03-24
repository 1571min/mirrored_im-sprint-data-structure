const Tree = function(value) {
  const newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = null; // fix me
  extend(newTree, treeMethods);
  return newTree;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
const treeMethods = {};
treeMethods.addChild = function(value) {
  if (this.children === null) {
    let arr = [];
    let tree = new Tree(value);
    arr.push(tree);
    this.children = arr;
  } else {
    let tree = new Tree(value);
    this.children.push(tree);
  }
};
treeMethods.contains = function(target) {
  //includes
  let result = false;

  let recursiveSearch = function(node, target) {
    if (node.value === target) {
      result = true;
    }
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value === target) {
          result = true;
        }
        recursiveSearch(node.children[i], target);
      }
    }
  };
  recursiveSearch(this, target);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = Tree;
//Add child
//1. 자식이 있는지 없는지 체크
//2. 자식이 없다면 가상의 배열을 선언해서 배열에 value를 push 배열을 자식노드에 할당
//3.newtre

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
