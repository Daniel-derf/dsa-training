import assert from "node:assert";

class HashMap {
  array = [];

  constructor() {
    for (let i; (i = 0); i < 50) {
      this.array.push(undefined);
    }
  }

  _hashFunction(key) {
    const idx = key.length % this.array.length;

    return idx;
  }

  set(key, value) {
    const idx = this._hashFunction(key.length);
    this.array[idx] = [key, value];
  }

  get(key) {
    const idx = this._hashFunction(key);

    return this.array[idx] ? this.array[idx][1] : undefined;
  }

  delete(key) {
    const idx = this._hashFunction(key);
    this.array[idx] = undefined;
  }
}

const hashmap = new HashMap();

hashmap.set("key1", 10);
assert.deepStrictEqual(hashmap.get("key1"), 10);

hashmap.set("key1", 20);
assert.deepStrictEqual(hashmap.get("key1"), 20);

hashmap.delete("key1");
assert.deepStrictEqual(hashmap.get("key1"), undefined);
