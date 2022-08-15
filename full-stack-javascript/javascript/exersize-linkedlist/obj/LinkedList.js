const Node = require('./ForwardNode.js');


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
LinkedList.prototype.append = function (value) {
  const node = new Node(value);
  if (this.nodeCount === 0) this.headNode = node;
  else this.at(this.nodeCount - 1).nextNode = node;
  this.nodeCount++;
}

/**
 * Prepend a value to the linked lists head.
 * @param {*} value 
 */
LinkedList.prototype.prepend = function (value) {
  this.headNode = new Node(value, this.headNode);
  this.nodeCount++;
}

/**
 * Get the head (first) node in the linked list.
 * @returns {Node} the head (first) Node object of this linked list.
 */
LinkedList.prototype.head = function () {
  return this.headNode;
}

/**
 * Get the tail (last) node in the linked list.
 * @returns {Node} the tail (last) Node object of this linked list, or null if list is empty
 */
LinkedList.prototype.tail = function () {
  if (this.nodeCount === 0) return null;
  return this.at(this.nodeCount - 1);
}

/**
 * Get the nodeCount of this link list (ie, the number of nodes).
 * @returns {number} the number of nodes.
 */
LinkedList.prototype.size = function () {
  return this.nodeCount;
}

/**
 * @param {number} index 
 * @returns {Node} Node object at specified index
 * @throws if index is negative, list is empty, or if no node found at index.
 */
LinkedList.prototype.at = function (index) {
  if (index < 0) throw new Error('index cannot be a negative number');
  let current = this.headNode;
  if (current === null) throw new Error('cannot retrieve Node from empty linked list');
  for (let i = 0; i < index; i++) {
    current = current.nextNode;
    if (current === null) throw new Error(`no Node found at index ${index}`);
  }
  return current;
}

/**
 * Removes the tail node from the LinkedList, returning it's data property
 * @returns {*} data property of tail node
 */
LinkedList.prototype.pop = function () {
  let tailData;
  switch (this.nodeCount) {
    case 0:
      return null;
    case 1:
      tailData = this.headNode.data;
      this.headNode = null;
      break;
    default:
      const newTail = this.at(this.nodeCount - 2);
      tailData = newTail.nextNode.data;
      newTail.nextNode = null;
      break;
  }
  this.nodeCount--;
  return tailData;
}

/**
 * Traverses each element in the linked list, checking the data property of each node. If the data property === value parameter, return true, otherwise return false
 * @param {*} value 
 * @returns {boolean} a boolean representing if the value is contained in one of the nodes in the list
 */
LinkedList.prototype.contains = function (value) {
  let current = this.headNode;
  while (current !== null) {
    if (current.data === value) return true;
    current = current.nextNode;
  }
  return false;
}

/**
 * Traverse each Node in the list, checking each data value, if found return index of Node containing the data
 * @param {*} value 
 * @returns {number} the list index at which the value was found
 */
LinkedList.prototype.find = function (value) {
  let current = this.headNode;
  for (let i = 0; current !== null; i++) {
    if (current.data === value) return i;
    current = current.nextNode;
  }
  return null;
}

/**
 * Generate a String representation of all the data in the LinkedList
 * @returns {String} representing all data in the LinkdeList
 */
LinkedList.prototype.toString = function () {
  let returnStr = '';
  if (this.nodeCount === 0) return 'Empty LinkedList';
  let current = this.headNode;
  while (current !== null) {
    returnStr += `( ${current.data} ) -> `;
    current = current.nextNode;
  }
  returnStr += 'null';
  return returnStr;
}

/**
 * inserts the data as a new node at specified index in the list
 * @param {*} value 
 * @param {number} index 
 */
LinkedList.prototype.insertAt = function (value, index) {
  const maxAllowableIndex = this.nodeCount;
  if (index < 0) throw new Error(`cannot add a value at a negative index`);
  if (index > maxAllowableIndex) throw new Error(`cannot add a value at index ${index} of a list with a max index of ${maxAllowableIndex}`);

  let current = this.headNode;
  let previous = null;

  for (let i = 0; i <= index; i++) {
    if (i === index) {
      // if (previous === null) { // headnode
      const n = new Node(value, current);
      if (previous !== null) previous.nextNode = n;
      else this.headNode = n;
      n.nextNode = current;
      //}
      this.nodeCount++;
      break;
    }
    previous = current;
    current = current.nextNode;
  }
}

/**
 * Remove the element at specified index, ensuring node links are updated
 * @param {number} index
 * @throws if index is a negative number, or is greater than allowable by the size of the list 
 */
LinkedList.prototype.removeAt = function (index) {
  const maxAllowableIndex = this.nodeCount - 1;
  if (index < 0) throw new Error(`cannot remove element at a negative index (${index})`);
  if (index > maxAllowableIndex) throw new Error(`cannot remove element at index ${index} of a ${this.nodeCount} size list`);

  let current = this.headNode;
  let previous = null;
  let next = current.nextNode;
  for (let i = 0;i <= index; i++) {
    if (i === index) {
      if (previous !== null ) previous.nextNode = next;
      else this.headNode = next;
      this.nodeCount--;
      break;
    }
    previous = current;
    current = current.nextNode;
    next = current.nextNode;
  }
}

module.exports = LinkedList;