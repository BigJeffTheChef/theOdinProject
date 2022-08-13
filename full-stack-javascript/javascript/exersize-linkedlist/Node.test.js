const Node = require('./Node.js');

let nodeEmpty, nodeWithData, nodeWithDataAndNext;

beforeEach(() => {
  nodeEmpty = new Node();
  nodeWithData = new Node([1, 2, 3]);
  nodeWithDataAndNext = new Node([4, 5, 6, 7], nodeWithData);
});

describe('Node object has correct properties and methods', () => {
  test('Node object has expected properties', () => {
    const props = Object.getOwnPropertyNames(nodeEmpty);
    expect(props).toContain('data');
    expect(props).toContain('next');
  });

  test('Node object has expected methods', () => {
    const methods = Object.getOwnPropertyNames(Node.prototype);
    expect(methods).toContain('value');
  });
});

describe('constructors', () => {
  test('empty node', () => {
    expect(nodeEmpty.data).toBe(null);
    expect(nodeEmpty.next).toBe(null);
  });

  test('node with data but no next', () => {
    expect(nodeWithData.data).toEqual([1, 2, 3]);
    expect(nodeWithData.next).toBe(null);
  });

  test('node with data and next', () => {
    expect(nodeWithDataAndNext.data).toEqual([4, 5, 6, 7]);
    expect(nodeWithDataAndNext.next).toEqual(nodeWithData);
  });
});