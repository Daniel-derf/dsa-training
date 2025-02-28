import assert from "node:assert";

class HashMap {
  array = [];

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.array.push(undefined);
    }
  }

  _hashFunction(key) {
    const idx = key.length % this.array.length;

    return idx;
  }

  set(key, value) {
    const idx = this._hashFunction(key);

    if (!this.array[idx]) {
      this.array[idx] = [key, value, []];
      return;
    }

    if (this.array[idx][0] === key) {
      this.array[idx] = [key, value, []];
      return;
    }

    let nextValue = this.array[idx][2];

    while (true) {
      if (!nextValue.length) break;
      nextValue = nextValue[2];
    }

    nextValue.push(key);
    nextValue.push(value);
    nextValue.push([]);
  }

  get(key) {
    const idx = this._hashFunction(key);

    if (!this.array[idx]) return undefined;

    if (this.array[idx][0] === key) return this.array[idx][1];

    let nextValue = this.array[idx][2];
    while (true) {
      if (!nextValue) return;
      if (nextValue[0] === key) break;
      nextValue = nextValue[2];
    }

    return nextValue[1];
  }

  delete(key) {
    const idx = this._hashFunction(key);

    if (!this.array[idx]) return undefined;

    if (this.array[idx][0] === key) {
      this.array[idx] = this.array[idx][2].length ? this.array[idx][2] : undefined;
      return;
    }

    let nextValue = this.array[idx][2];
    while (true) {
      if (!nextValue) return;
      if (nextValue[0] === key) break;
      nextValue = nextValue[2];
    }

    nextValue = nextValue[2] ? nextValue[2] : undefined;
  }
}

const hashmap = new HashMap();

hashmap.set("key1", 10);
assert.deepStrictEqual(hashmap.get("key1"), 10);

hashmap.set("key2", 15);
assert.deepStrictEqual(hashmap.get("key2"), 15);
assert.deepStrictEqual(hashmap.get("key1"), 10);

hashmap.set("key1", 20);
assert.deepStrictEqual(hashmap.get("key1"), 20);

hashmap.delete("key1");
assert.deepStrictEqual(hashmap.get("key1"), undefined);

hashmap.set("key1", 60);
hashmap.delete("key2");
assert.deepStrictEqual(hashmap.get("key2"), undefined);
assert.deepStrictEqual(hashmap.get("key1"), 60);
