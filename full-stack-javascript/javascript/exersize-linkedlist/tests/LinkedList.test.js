const LinkedList = require('../obj/LinkedList.js');
const Node = require('../obj/ForwardNode.js');

// test objects
let linkedList6Elements, linkedList1Element, linkedListEmpty;

// test data
const e0 = '1st element';
const e1 = '2nd element';
const e2 = '3rd element';
const e3 = '4th element';
const e4 = '5th element';
const e5 = '6th element';
const eNotInList = 'a random string not in list';
const eInserted = 'inserted at an index';

beforeEach(() => {
  linkedListEmpty = new LinkedList();

  linkedList1Element = new LinkedList();
  linkedList1Element.append(e0);

  linkedList6Elements = new LinkedList();
  linkedList6Elements.append(e0);
  linkedList6Elements.append(e1);
  linkedList6Elements.append(e2);
  linkedList6Elements.append(e3);
  linkedList6Elements.append(e4);
  linkedList6Elements.append(e5);
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
    expect(props).toContain('size');
    expect(props).toContain('head');
    expect(props).toContain('tail');
    expect(props).toContain('at');
    expect(props).toContain('pop');
    expect(props).toContain('contains');
    expect(props).toContain('find');
    expect(props).toContain('toString');
    expect(props).toContain('insertAt');
    expect(props).toContain('removeAt');

  });
});

describe('append method', () => {
  test('append() successfully appends to linked list', () => {
    expect(linkedList6Elements.head().data).toBe(e0);
    expect(linkedList6Elements.tail().data).toBe(e5);
  });
});

describe('prepend method', () => {
  test('prepend() successfully prepends to linked list', () => {
    linkedList6Elements.prepend('new 1st element');
    expect(linkedList6Elements.head().data).toBe('new 1st element');
    expect(linkedList6Elements.tail().data).toBe(e5);
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
    linkedList6Elements.prepend('new 1st element');
    expect(linkedList6Elements.size()).toBe(8);
  });
});

describe('head method', () => {
  test('head returns 1st node', () => {
    linkedList6Elements.append(e0);
    linkedList6Elements.append(e1);
    const head = linkedList6Elements.head();
    expect(head).toEqual(expect.any(Node));
    expect(head.data).toBe(e0);
  });
});

describe('tail method', () => {
  test('tail returns null of 0 long list', () => {
    const tail = linkedListEmpty.tail();
    expect(tail).toEqual(null);
  });
  
  test('tail returns last node of 1 long list', () => {
    const tail = linkedList1Element.tail();
    expect(tail).toEqual(expect.any(Node));
    expect(tail.data).toBe(e0);
  });
  
  test('tail returns last node of 6 long list', () => {
    const tail = linkedList6Elements.tail();
    expect(tail).toEqual(expect.any(Node));
    expect(tail.data).toBe(e5);
  });
});

describe('at method', () => {
  beforeEach(() => {

  });

  test('at returns correct node', () => {
    const n1 = linkedList6Elements.at(0);
    expect(n1).toEqual(expect.any(Node));
    expect(n1.data).toBe(e0);

    const n2 = linkedList6Elements.at(2);
    expect(n2).toEqual(expect.any(Node));
    expect(n2.data).toBe(e2);

    const n3 = linkedList6Elements.at(5);
    expect(n3).toEqual(expect.any(Node));
    expect(n3.data).toBe(e5);
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
    expect(popped).toBe(e0);
    expect(linkedList1Element.size()).toBe(0);
    expect(linkedList1Element.pop()).toBe(null);
  });

  test('pop handles list of size n', () => {
    const popped = linkedList6Elements.pop();
    expect(popped).toEqual(expect.any(String));
    expect(popped).toEqual(e5);
    expect(linkedList6Elements.size()).toBe(5);
    expect(linkedList6Elements.nodeCount).toBe(5);
    expect(linkedList6Elements.tail().data).toEqual(e4);

    const popped2 = linkedList6Elements.pop();
    expect(popped2).toEqual(expect.any(String));
    expect(popped2).toEqual(e4);
    expect(linkedList6Elements.size()).toBe(4);
    expect(linkedList6Elements.nodeCount).toBe(4);
    expect(linkedList6Elements.tail().data).toEqual(e3);
  });
});

describe('contains method', () => {

  test('contains returns false if not found - empty list', () => {
    expect(linkedListEmpty.contains(eNotInList)).toBe(false);
  });
  test('contains returns false if not found - 1 size list', () => {
    expect(linkedList1Element.contains(eNotInList)).toBe(false);
  });
  test('contains returns false if not found - n size list list', () => {
    expect(linkedList6Elements.contains(eNotInList)).toBe(false);
  });

  test('contains returns true if found - 1 size list', () => {
    expect(linkedList1Element.contains(e0)).toBe(true);
  });
  test('contains returns true if found - n size list', () => {
    expect(linkedList6Elements.contains(e0)).toBe(true);
    expect(linkedList6Elements.contains(e1)).toBe(true);
    expect(linkedList6Elements.contains(e2)).toBe(true);
    expect(linkedList6Elements.contains(e3)).toBe(true);
    expect(linkedList6Elements.contains(e4)).toBe(true);
    expect(linkedList6Elements.contains(e5)).toBe(true);
    linkedList6Elements.pop();
    expect(linkedList6Elements.contains(e5)).toBe(false);
  });
});

describe('find method', () => {
  test('returns null if not found', () => {
    expect(linkedListEmpty.find(e0)).toBe(null);
    expect(linkedList1Element.find(e2)).toBe(null);
    expect(linkedList6Elements.find(eNotInList)).toBe(null);
  });

  test('returns index if found', () => {
    expect(linkedList6Elements.find(e0)).toBe(0);
    expect(linkedList6Elements.find(e2)).toBe(2);
    expect(linkedList6Elements.find(e5)).toBe(5);
  });
});

describe('toString method', () => {
  test('toString on empty list', () => {
    expect(linkedListEmpty.toString()).toBe('Empty LinkedList');
  });
  test('toString on list of size 1', () => {
    expect(linkedList1Element.toString()).toBe(`( ${e0} ) -> null`);
  });
  test('toString on list of size n', () => {
    expect(linkedList6Elements.toString()).toBe(`( ${e0} ) -> ( ${e1} ) -> ( ${e2} ) -> ( ${e3} ) -> ( ${e4} ) -> ( ${e5} ) -> null`)
  });
});

describe('insertAt method', () => {
  describe('successful inserts', () => {
    test('insertAt index 0 of empty list', () => {
      expect(linkedListEmpty.contains(eInserted)).toBe(false);
      linkedListEmpty.insertAt(eInserted, 0);
      expect(linkedListEmpty.head().data).toBe(eInserted);
      expect(linkedListEmpty.size()).toBe(1);
      expect(linkedListEmpty.contains(eInserted)).toBe(true);
      expect(linkedListEmpty.find(eInserted)).toBe(0);
    });
    test('insertAt index 0 of 1 size list', () => {
      expect(linkedList1Element.contains(eInserted)).toBe(false);
      linkedList1Element.insertAt(eInserted, 0);
      expect(linkedList1Element.head().data).toBe(eInserted);
      expect(linkedList1Element.size()).toBe(2);
      expect(linkedList1Element.contains(eInserted)).toBe(true);
      expect(linkedList1Element.find(eInserted)).toBe(0);
    });
    test('insertAt index 0 of 6 size list', () => {
      expect(linkedList6Elements.contains(eInserted)).toBe(false);
      linkedList6Elements.insertAt(eInserted, 0);
      expect(linkedList6Elements.head().data).toBe(eInserted);
      expect(linkedList6Elements.size()).toBe(7);
      expect(linkedList6Elements.contains(eInserted)).toBe(true);
      expect(linkedList6Elements.find(eInserted)).toBe(0);
    });
    test('insertAt index 1 of 1 size list', () => {
      expect(linkedList1Element.contains(eInserted)).toBe(false);
      linkedList1Element.insertAt(eInserted, 1);
      expect(linkedList1Element.at(1).data).toBe(eInserted);
      expect(linkedList1Element.size()).toBe(2);
      expect(linkedList1Element.contains(eInserted)).toBe(true);
      expect(linkedList1Element.find(eInserted)).toBe(1);
    });
    test('insertAt index 1 of 6 size list', () => {
      expect(linkedList6Elements.contains(eInserted)).toBe(false);
      linkedList6Elements.insertAt(eInserted, 1);
      expect(linkedList6Elements.at(1).data).toBe(eInserted);
      expect(linkedList6Elements.size()).toBe(7);
      expect(linkedList6Elements.contains(eInserted)).toBe(true);
      expect(linkedList6Elements.find(eInserted)).toBe(1);
    });
    test('insertAt index 2 of 6 size list', () => {
      expect(linkedList6Elements.contains(eInserted)).toBe(false);
      linkedList6Elements.insertAt(eInserted, 2);
      expect(linkedList6Elements.at(2).data).toBe(eInserted);
      expect(linkedList6Elements.size()).toBe(7);
      expect(linkedList6Elements.contains(eInserted)).toBe(true);
      expect(linkedList6Elements.find(eInserted)).toBe(2);

      // ensure new order is correct
      const nodeAt1 = linkedList6Elements.at(1);
      const nodeAt2 = linkedList6Elements.at(2);
      const nodeAt3 = linkedList6Elements.at(3);
      const nodeAt4 = linkedList6Elements.at(4);

      expect(nodeAt1.data).toBe(e1);
      expect(nodeAt1.nextNode).toEqual(nodeAt2);

      expect(nodeAt2.data).toBe(eInserted);
      expect(nodeAt2.nextNode).toEqual(nodeAt3);

      expect(nodeAt3.data).toBe(e2);
      expect(nodeAt3.nextNode).toEqual(nodeAt4);
    });
    test('insertAt index 6 of 6 size list', () => {
      expect(linkedList6Elements.contains(eInserted)).toBe(false);
      linkedList6Elements.insertAt(eInserted, 6);
      expect(linkedList6Elements.at(6).data).toBe(eInserted);
      expect(linkedList6Elements.size()).toBe(7);
      expect(linkedList6Elements.contains(eInserted)).toBe(true);
      expect(linkedList6Elements.find(eInserted)).toBe(6);
      expect(linkedList6Elements.tail().date).not.toBe(eInserted);
    });
  });
  describe('failed inserts', () => {

    describe('inserting at a negative index throws error', () => {
      test('insertAt index -1 of empty list', () => {
        expect(() => linkedListEmpty.insertAt(eInserted, -1)).toThrow(`cannot add a value at a negative index`);
        expect(() => linkedListEmpty.insertAt(eInserted, -99)).toThrow(`cannot add a value at a negative index`);
      });

      test('insertAt index -1 of 1 size list', () => {
        expect(() => linkedList1Element.insertAt(eInserted, -1)).toThrow(`cannot add a value at a negative index`);
        expect(() => linkedList1Element.insertAt(eInserted, -99)).toThrow(`cannot add a value at a negative index`);
      });

      test('insertAt index -1 of empty list', () => {
        expect(() => linkedList6Elements.insertAt(eInserted, -1)).toThrow(`cannot add a value at a negative index`);
        expect(() => linkedList6Elements.insertAt(eInserted, -99)).toThrow(`cannot add a value at a negative index`);
      });
    });

    describe('inserting at index outside of maximum allowable index', () => {

      test('insertAt index > 0 of empty list', () => {
        expect(() => linkedListEmpty.insertAt(eInserted, 1)).toThrow(`cannot add a value at index 1 of a list with a max index of 0`);
      });

      test('insertAt index > 1 of 1 size list', () => {
        expect(() => linkedList1Element.insertAt(eInserted, 2)).toThrow(`cannot add a value at index 2 of a list with a max index of 1`);
        expect(() => linkedList1Element.insertAt(eInserted, 50)).toThrow(`cannot add a value at index 50 of a list with a max index of 1`);
      });

      test('insertAt index > 6 of 6 size list', () => {
        expect(() => linkedList6Elements.insertAt(eInserted, 7)).toThrow(`cannot add a value at index 7 of a list with a max index of 6`);
        expect(() => linkedList6Elements.insertAt(eInserted, 50)).toThrow(`cannot add a value at index 50 of a list with a max index of 6`);
      });
    });
  });
});

describe('removeAt method', () => {
  describe('successful removal', () => {
    test('remove element 0 of 1 size list', () => {
      expect(linkedList1Element.contains(e0)).toBe(true);
      expect(linkedList1Element.find(e0)).toBe(0);
      expect(linkedList1Element.size()).toBe(1);
      linkedList1Element.removeAt(0);
      expect(linkedList1Element.contains(e0)).toBe(false);
      expect(linkedList1Element.find(e0)).toBe(null);
      expect(linkedList1Element.size()).toBe(0);

      // ensure list now empty maintained;
      expect(() => linkedList1Element.at(0)).toThrow(Error);
    });
    test('remove element 0 of 6 size list', () => { 
      expect(linkedList6Elements.contains(e0)).toBe(true);
      expect(linkedList6Elements.find(e0)).toBe(0);
      expect(linkedList6Elements.size()).toBe(6);
      linkedList6Elements.removeAt(0);
      expect(linkedList6Elements.contains(e0)).toBe(false);
      expect(linkedList6Elements.find(e0)).toBe(null);
      expect(linkedList6Elements.size()).toBe(5);

      // ensure order maintained;
      const nodeAt0 = linkedList6Elements.at(0);
      const nodeAt1 = linkedList6Elements.at(1);

      expect(nodeAt0.data).toBe(e1);
      expect(nodeAt0.nextNode).toEqual(nodeAt1);
    });
    test('remove element 3 of 6 size list', () => {
      expect(linkedList6Elements.contains(e2)).toBe(true);
      expect(linkedList6Elements.find(e2)).toBe(2);
      expect(linkedList6Elements.size()).toBe(6);
      linkedList6Elements.removeAt(2);
      expect(linkedList6Elements.contains(e2)).toBe(false);
      expect(linkedList6Elements.find(e2)).toBe(null);
      expect(linkedList6Elements.size()).toBe(5);

      // ensure order maintained;
      const nodeAt1 = linkedList6Elements.at(1);
      const nodeAt2 = linkedList6Elements.at(2);
      const nodeAt3 = linkedList6Elements.at(3);

      expect(nodeAt1.data).toBe(e1);
      expect(nodeAt1.nextNode).toEqual(nodeAt2);
      expect(nodeAt2.data).toBe(e3);
      expect(nodeAt2.nextNode).toEqual(nodeAt3);
    });
    test('remove element 6 of 6 size list', () => {
      expect(linkedList6Elements.contains(e5)).toBe(true);
      expect(linkedList6Elements.find(e5)).toBe(5);
      expect(linkedList6Elements.size()).toBe(6);
      linkedList6Elements.removeAt(5);
      expect(linkedList6Elements.contains(e5)).toBe(false);
      expect(linkedList6Elements.find(e5)).toBe(null);
      expect(linkedList6Elements.size()).toBe(5);

      // ensure order maintained;
      const nodeAt4 = linkedList6Elements.at(4);

      expect(nodeAt4.data).toBe(e4);
      expect(nodeAt4.nextNode).toEqual(null);
    });

  });
  describe('failed removal', () => {

    describe('removal of negative index throws error', () => {
      test('remove element index -1 of empty list - throws Error', () => {
        expect(() => linkedListEmpty.removeAt(-1)).toThrow('cannot remove element at a negative index (-1)');
      });
      test('remove element index -1 of 1 size list - throws Error', () => {
        expect(() => linkedList1Element.removeAt(-1)).toThrow('cannot remove element at a negative index (-1)');
      });
      test('remove element index -1 of 6 size list - throws Error', () => {
        expect(() => linkedList6Elements.removeAt(-1)).toThrow('cannot remove element at a negative index (-1)');
      });

      test('remove element index -50 of empty list - throws Error', () => {
        expect(() => linkedListEmpty.removeAt(-50)).toThrow('cannot remove element at a negative index (-50)');
      });
      test('remove element index -75 of 1 size list - throws Error', () => {
        expect(() => linkedList1Element.removeAt(-75)).toThrow('cannot remove element at a negative index (-75)');
      });
      test('remove element index -99 of 6 size list - throws Error', () => {
        expect(() => linkedList6Elements.removeAt(-99)).toThrow('cannot remove element at a negative index (-99)');
      });

    });

    describe('removal of index greater than allowable max throws error', () => {
      test('remove element index 0 of empty list - throws Error', () => {
        expect(() => linkedListEmpty.removeAt(0)).toThrow('cannot remove element at index 0 of a 0 size list');
      });

      test('remove element index 1 of 1 size list - throws Error', () => {
        expect(() => linkedList1Element.removeAt(1)).toThrow('cannot remove element at index 1 of a 1 size list');
      });

      test('remove element index 6 of 6 size list - throws Error', () => {
        expect(() => linkedList6Elements.removeAt(6)).toThrow('cannot remove element at index 6 of a 6 size list');
      });
    });

  });
});