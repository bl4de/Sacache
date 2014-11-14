/**
 * Created by rafal.janicki on 2014-11-14.
 */
var Sacache = {
    max_cache_size: 100
};

Sacache.storage = [];

Sacache.add = function (key, val) {
    this.autoclear();

    if (!this.exists(key)) {
        this.storage.push({
            storageKey: key,
            storageValue: val
        });
    }
};

Sacache.get = function (key) {
    var _filter = function (item) {
            return key === item['storageKey'];
        },
        _storageItem;

    if (this.exists(key)) {
        _storageItem = this.storage.filter(_filter);
    }
    return _storageItem[0]['storageValue'];
};

Sacache.exists = function (key) {
    var _exists,
        _find = function (item) {
            return key === item['storageKey'];
        };

    _exists = this.storage.filter(_find);
    return Boolean(_exists.length > 0);
};

Sacache.clear = function () {
    this.storage = [];
};

Sacache.countItems = function () {
    return this.storage.length;
};

Sacache.autoclear = function () {
    if (this.storage.length > this.max_cache_size) {
        this.clear();
    }
};