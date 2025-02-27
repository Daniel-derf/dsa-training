const assert = require("node:assert/strict");

class Queue {
  elements = [];

  push(el) {
    this.elements.push(el);
  }

  pop() {
    if (!this.elements) return null;

    const removedItem = this.elements[0];
    this.elements = this.elements.slice(1, this.elements.length);

    return removedItem;
  }

  get() {
    return this.elements;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(4);
queue.push(5);

assert.deepStrictEqual(queue.get(), [1, 4, 5]);

queue.pop();

assert.deepStrictEqual(queue.get(), [4, 5]);

queue.pop();

assert.deepStrictEqual(queue.get(), [5]);

queue.pop();

assert.deepStrictEqual(queue.get(), []);

queue.push(1);

assert.deepStrictEqual(queue.get(), [1]);
