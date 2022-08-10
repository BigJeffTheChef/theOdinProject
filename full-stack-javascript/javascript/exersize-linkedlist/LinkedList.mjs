/* LINKED LIST */

function LinkedList() {
  this.head = new Node();
}

LinkedList.prototype.append = function(value) {
  const newNode = new Node(value);
  let current = this.head;
  while (true) {
    if (current.next) current = current.next;
    else break;
  }

}

/* NODE */

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

Node.prototype.value = function () {
  return this.data;
}


export {LinkedList};