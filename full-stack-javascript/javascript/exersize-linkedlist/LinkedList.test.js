const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

let linkedList6Elements,linkedList1Element, linkedListEmpty;

beforeEach(() => {
  linkedListEmpty = new LinkedList();

  linkedList1Element = new LinkedList();
  linkedList1Element.append('first element');

  linkedList6Elements = new LinkedList();
  linkedList6Elements.append('first element');
  linkedList6Elements.append('second element');
  linkedList6Elements.append('third element');
  linkedList6Elements.append('forth element');
  linkedList6Elements.append('fifth element');
  linkedList6Elements.append('sixth element');
});

describe('construction', () => {
  test('constructor creates linked list', () => {
    expect(linkedList6Elements).not.toBe(null);
    expect(linkedList6Elements).not.toBe(undefined);
    expect(linkedList6Elements).toEqual(expect.any(LinkedList));
  });

  test('Linked List object has expected properties', () => {
    const props = Object.getOwnPropertyNames(linkedList6Elements);
    expect(props).toContain('headNode');
    expect(props).toContain('nodeCount');
  });

  test('Linked List object has expected methods', () => {
    const props = Object.getOwnPropertyNames(LinkedList.prototype);
    expect(props).toContain('append');
    expect(props).toContain('prepend');
    expect(props).toContain('head');
    expect(props).toContain('tail');
    expect(props).toContain('size');

  });
});

describe('append method', () => {
  test('append() successfully appends to linked list', () => {
    expect(linkedList6Elements.head().data).toBe('first element');
    expect(linkedList6Elements.tail().data).toBe('sixth element');
  });
});

describe('prepend method', () => {
  test('prepend() successfully prepends to linked list', () => {
    linkedList6Elements.prepend('new first element');
    expect(linkedList6Elements.head().data).toBe('new first element');
    expect(linkedList6Elements.tail().data).toBe('sixth element');
  });
});

describe('size method', () => {
  test('size is 0 on construction', () => {
    expect(linkedListEmpty.size()).toBe(0);
  });

  test('append method updates size', () => {
    linkedList6Elements.append('seventh element');
    expect(linkedList6Elements.size()).toBe(7);
    linkedList6Elements.append('eighth element');
    expect(linkedList6Elements.size()).toBe(8);
  });

  test('prepend method updates size', () => {
    linkedList6Elements.prepend('seventh element');
    expect(linkedList6Elements.size()).toBe(7);
    linkedList6Elements.prepend('new first element');
    expect(linkedList6Elements.size()).toBe(8);
  });
});

describe('head method', () => {
  test('head returns first node', () => {
    linkedList6Elements.append('first element');
    linkedList6Elements.append('second element');
    const head = linkedList6Elements.head();
    expect(head).toEqual(expect.any(Node));
    expect(head.data).toBe('first element');
  });
});

describe('tail method', () => {
  test('tail returns last node', () => {
    const tail = linkedList6Elements.tail();
    expect(tail).toEqual(expect.any(Node));
    expect(tail.data).toBe('sixth element');
  });
});

describe('at method', () => {
  beforeEach(() => {

  });

  test('at returns correct node', () => {
    const n1 = linkedList6Elements.at(0);
    expect(n1).toEqual(expect.any(Node));
    expect(n1.data).toBe('first element');

    const n2 = linkedList6Elements.at(2);
    expect(n2).toEqual(expect.any(Node));
    expect(n2.data).toBe('third element');

    const n3 = linkedList6Elements.at(5);
    expect(n3).toEqual(expect.any(Node));
    expect(n3.data).toBe('sixth element');
  });

  test('at throws Error with negative index', () => {
    expect(() => linkedList6Elements.at(-1)).toThrow('index cannot be a negative number');
  });

  test('at throws Error if no Node at that index', () => {
    expect(() => linkedList6Elements.at(6)).toThrow('no Node found at index 6');
    expect(() => linkedList6Elements.at(20)).toThrow('no Node found at index 20');
  });

  test('at throws Error if empty Linked List', () => {
    expect(() => linkedListEmpty.at(0)).toThrow('cannot retrieve Node from empty linked list');
    expect(() => linkedListEmpty.at(5)).toThrow('cannot retrieve Node from empty linked list');
  });
});

describe('pop method', () => {
  test('pop handles list of size 0', () => {
    expect(linkedListEmpty.pop()).toBe(null);
    expect(linkedListEmpty.size()).toBe(0);
  });

  test('pop handles list of size 1', () => {
    const popped = linkedList1Element.pop();
    expect(popped.data).toBe('first element');
    expect(linkedList1Element.size()).toBe(0);
  });

  test('pop handles list of size n', () => {
    const popped = linkedList6Elements.pop();
    expect(popped).toEqual(expect.any(Node));
    expect(linkedList6Elements.size()).toBe(5);
    expect(linkedList6Elements.tail().data).toEqual('fifth element');
  });
});