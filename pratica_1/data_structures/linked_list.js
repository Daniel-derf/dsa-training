import assert from "node:assert";
import test from "node:test";

class Node {}

class LinkedList {
  add() {}
  print() {}
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

console.log("Todos os testes passaram!");
