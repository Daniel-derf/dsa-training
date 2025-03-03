import assert from "node:assert";
import test from "node:test";

class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  head = null;
  tail = null;

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  print() {
    const listArray = [];

    let node = this.head;
    while (node) {
      listArray.push(node.value);
      node = node?.next;
    }

    return listArray;
  }

  find() {}

  remove() {}

  invert() {}
}

// -------------- TESTES -----------------

const linkedList = new LinkedList();

test("adding elements", () => {
  linkedList.add(2);
  assert.deepStrictEqual(linkedList.print(), [2]);

  linkedList.add(1);
  linkedList.add(5);
  linkedList.add(3);
  linkedList.add(8);
  assert.deepStrictEqual(linkedList.print(), [2, 1, 5, 3, 8]);
});

test("find elements", () => {
  assert.deepStrictEqual(linkedList.find(3), [3, 3]);
  assert.deepStrictEqual(linkedList.find(8), [4, 8]);
  assert.deepStrictEqual(linkedList.find(10), -1);
});

test("removing elements", () => {
  linkedList.remove(5);
  assert.deepStrictEqual(linkedList.print(), [2, 1, 3, 8]);
  assert.deepStrictEqual(linkedList.find(3), [2, 3]);

  linkedList.remove(2);
  assert.deepStrictEqual(linkedList.print(), [1, 3, 8]);

  linkedList.remove(8);
  assert.deepStrictEqual(linkedList.print(), [1, 3]);

  linkedList.remove(10);
  assert.deepStrictEqual(linkedList.print(), [1, 3]);
});

test("inverting list", () => {
  linkedList.invert();
  assert.deepStrictEqual(linkedList.print(), [3, 1]);

  linkedList.invert();
  assert.deepStrictEqual(linkedList.print(), [1, 3]);
});
