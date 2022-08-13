const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

let linkedList, linkedListEmpty;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('construction', () => {
  test('constructor creates linked list', () => {
    expect(linkedList).not.toBe(null);
    expect(linkedList).not.toBe(undefined);
    expect(linkedList).toEqual(expect.any(LinkedList));
  });

  test('Linked List object has expected properties', () => {
    const props = Object.getOwnPropertyNames(linkedList);
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
    linkedList.append('first node data string');
    linkedList.append('second node data string');
    expect(linkedList.head().data).toBe('first node data string');
    expect(linkedList.tail().data).toBe('second node data string');
  });
});

describe('prepend method', () => {
  test('prepend() successfully prepends to linked list', () => {
    linkedList.prepend('second node data string');
    linkedList.prepend('first node data string');
    expect(linkedList.head().data).toBe('first node data string');
    expect(linkedList.tail().data).toBe('second node data string');
  });
});

describe('size method', () => {
  test('size is 0 on construction', () => {
    expect(linkedList.size()).toBe(0);
  });

  test('append method updates size', () => {
    linkedList.append('first node data string');
    expect(linkedList.size()).toBe(1);
    linkedList.append('second node data string');
    expect(linkedList.size()).toBe(2);
  });

  test('prepend method updates size', () => {
    linkedList.prepend('second node data string');
    expect(linkedList.size()).toBe(1);
    linkedList.prepend('first node data string');
    expect(linkedList.size()).toBe(2);
  });
});

describe('head method', () => {
  test('head returns first node', () => {
    linkedList.append('first node data string');
    linkedList.append('second node data string');
    const head = linkedList.head();
    expect(head).toEqual(expect.any(Node));
    expect(head.data).toBe('first node data string');
  });
});

describe('tail method', () => {
  test('tail returns last node', () => {
    linkedList.append('first node data string');
    linkedList.append('second node data string');
    const tail = linkedList.tail();
    expect(tail).toEqual(expect.any(Node));
    expect(tail.data).toBe('second node data string');
  });
});

describe('at method', () => {
  beforeEach(() => {
    linkedList.append('first node data string');
    linkedList.append('second node data string');
    linkedList.append('third node data string');
    linkedList.append('forth node data string');
    linkedList.append('fifth node data string');
    linkedList.append('sixth node data string');
    linkedListEmpty = new LinkedList();
  });

  test('at returns correct node', () => {
    let node;

    node = linkedList.at(0);
    expect(node).toEqual(expect.any(Node));
    expect(node.data).toBe('first node data string');

    node = linkedList.at(2);
    expect(node).toEqual(expect.any(Node));
    expect(node.data).toBe('third node data string');

    node = linkedList.at(5);
    expect(node).toEqual(expect.any(Node));
    expect(node.data).toBe('sixth node data string');
  });

  test('at throws Error with negative index', () => {
    expect(() => linkedList.at(-1)).toThrow('index cannot be a negative number');
  });

  test('at throws Error if no Node at that index', () => {
    expect(() => linkedList.at(6)).toThrow('no Node found at index 6');
    expect(() => linkedList.at(20)).toThrow('no Node found at index 20');
  });

  test('at throws Error if empty Linked List', () => {
    expect(() => linkedListEmpty.at(0)).toThrow('cannot retrieve Node from empty linked list');
    expect(() => linkedListEmpty.at(5)).toThrow('cannot retrieve Node from empty linked list');
  });
});