
/**
 * Create a Node, intended for use in Linked Lists
 * @param {*} data 
 * @param {Node} next 
 */
function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

Node.prototype.value = function getDataInNode() {
  return this.data;
}


module.exports = Node;