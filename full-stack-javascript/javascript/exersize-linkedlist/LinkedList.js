/* LINKED LIST */
const Node = require('./Node.js');


/********************************************
 CONSTRUCTORS
 *******************************************/

/**
 * Create an empty Linked List. The headNode is set to null, and the nodeCount to 0.
 */
function LinkedList() {
  this.headNode = null;
  this.nodeCount = 0;
}

/********************************************
 PROTOTYPE METHODS
 *******************************************/

/**
 * Append a value to the linked lists tail.
 * @param {*} value 
 */
LinkedList.prototype.append = function appendNewNodeToTail(value) {
  const tail = getTailNode.call(this);
  if (tail === null) { // meaning there is no head
    this.headNode = new Node(value);
  } else {
    tail.nextNode = new Node(value);
  }
  this.nodeCount++;
}

/**
 * Prepend a value to the linked lists head.
 * @param {*} value 
 */
LinkedList.prototype.prepend = function prependNewNodeToHeadAndLinkToOldHead(value) {
  let newHead = new Node(value, this.headNode);
  this.headNode = newHead;
  this.nodeCount++;
}

/**
 * Get the head (first) node in the linked list.
 * @returns {Node} the head (first) Node object of this linked list.
 */
LinkedList.prototype.head = function getFirstNode() {
  return this.headNode;
}

/**
 * Get the tail (last) node in the linked list.
 * @returns {Node} the tail (last) Node object of this linked list.
 */
LinkedList.prototype.tail = function getTheLastNode() {
  return getTailNode.call(this);
}

/**
 * Get the nodeCount of this link list (ie, the number of nodes).
 * @returns {number} the number of nodes.
 */
LinkedList.prototype.size = function getNumberOfNodes() {
  return this.nodeCount;
}

LinkedList.prototype.at = function getNodeAtIndex(index) {
  if (index < 0) throw new Error('index cannot be a negative number');
  let current = this.headNode;
  if (current === null) throw new Error('cannot retrieve Node from empty linked list');

  for (let i = 0; i < index; i++) {
    current = current.nextNode;
    if (current === null) throw new Error(`no Node found at index ${index}`);
  }
  return current;
}

LinkedList.prototype.pop = function removeAndReturnTailElement() {
  if (this.nodeCount === 0) return null;
  if (this.nodeCount === 1) {
    this.nodeCount--;
    return this.headNode;
  }
  const tail = getTailNode.call(this);
  this.at(this.nodeCount - 2)
  this.nodeCount--;
  return tail;
}

/********************************************
 HELPER FUNCTIONS
 *******************************************/

 /**
  * Traverse the linked list, returning the tail (last) node.
  * @this {LinkedList} context of this must be bound to a LinkedList object
  * @returns {Node | null} the tail (last) Node, or null if no tail Node exists.
  */
function getTailNode() {
  let current = this.headNode;
  if (current === null) return current;
  while (current.nextNode !== null) {
    //console.log(current);
    current = current.nextNode;
  };
  return current;
}

// function countNodes(linkedListObj) {
//   let current = linkedListObj.headNode;
//   let count = 0;
//   if (current === null) return count;
//   else {
//     count++;
//     while (current.next !== null) {
//       current = current.next
//       count++;
//     }
//   }
//   return count;
// }



module.exports = LinkedList;