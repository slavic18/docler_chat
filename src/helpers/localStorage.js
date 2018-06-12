import {LOCAL_STORAGE_PREFIX} from "../config";

const window = global || {};

class Storage {
  constructor() {
    this.prefix = LOCAL_STORAGE_PREFIX;
    this._storage = window.localStorage || {
      getItem: () => {
      },
      setItem: () => {
      },
    };
  }

  get storage() {
    return this._storage;
  }

  prepareKey(key) {
    return this.prefix + key;
  }

  isActive() {
    return typeof Storage !== "undefined" && window.localStorage;
  }

  get(key) {
    const preparedKey = this.prepareKey(key);
    const value = this.storage.getItem(preparedKey);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  set(key, val) {
    const preparedKey = this.prepareKey(key);
    this.storage.setItem(preparedKey, JSON.stringify(val));
  }

  remove(key) {
    let result = false;
    const preparedKey = this.prepareKey(key);

    if (preparedKey in this.storage) {
      result = true;
      localStorage.removeItem(preparedKey);
    }

    return result;
  }

  clear() {
    if (this.isActive()) {
      Object.keys(this.storage).forEach((key) => {
        let re = new RegExp(this.prefix, "g");
        if (re.test(key)) {
          this.storage.removeItem(key);
        }
      });
    }
  }
}

export default new Storage();
