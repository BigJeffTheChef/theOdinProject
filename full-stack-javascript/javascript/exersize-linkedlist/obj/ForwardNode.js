
/**
 * Create a Node, intended for use in Linked Lists
 * @param {*} data 
 * @param {Node} nextNode 
 */
function Node(data = null, nextNode = null) {
  this.data = data;
  this.nextNode = nextNode;
}

Node.prototype.value = function getDataInNode() {
  return this.data;
}


module.exports = Node;