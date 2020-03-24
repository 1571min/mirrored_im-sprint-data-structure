// Instantiate a new graph
const Graph = function() {
  this.obj = {};
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.obj[node] = [];
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.obj;
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.obj[node];
  for (let pro in this.obj) {
    this.obj[pro] = this.obj[pro].filter(function(val) {
      if (val === node) {
        return false;
      }
      return true;
    });
  }
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.obj[fromNode].includes(toNode);
};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.obj[fromNode].push(toNode);
  this.obj[toNode].push(fromNode);
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.obj[fromNode] = this.obj[fromNode].filter(function(val) {
    if (val === toNode) {
      return false;
    }
    return true;
  });
  this.obj[toNode] = this.obj[toNode].filter(function(val) {
    if (val === fromNode) {
      return false;
    }
    return true;
  });
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let pro in this.obj) {
    cb(pro);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
module.exports = Graph;
