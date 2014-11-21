/**
 * Created by rafal.janicki on 2014-11-14.
 */
var Sacache = Sacache || {
    // max Sacache size; when exceeded, autoclear() is executed
    max_cache_size: 100,

    // in-memory storage array
    storage: [],

    // add new value identified by key to storage
    add: function (key, val) {
        this.autoclear();

        if (!this.exists(key)) {
            this.storage.push({
                storageKey: key,
                storageValue: val
            });
        }
    },

    // get value identified by key
    get: function (key) {
        var _filter = function (item) {
                return key === item['storageKey'];
            },
            _storageItem;

        if (this.exists(key)) {
            _storageItem = this.storage.filter(_filter);
        }
        return _storageItem[0]['storageValue'];
    },

    // check if particular key exists in storage
    exists: function (key) {
        var _exists,
            _find = function (item) {
                return key === item['storageKey'];
            };

        _exists = this.storage.filter(_find);
        return Boolean(_exists.length > 0);
    },

    // clears storage
    clear: function () {
        this.storage = [];
    },

    // return storage size
    countItems: function () {
        return this.storage.length;
    },

    // clears storage when max_cache_size exceeded
    autoclear: function () {
        if (this.storage.length > this.max_cache_size) {
            this.clear();
        }
    }
};
