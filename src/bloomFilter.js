var BloomFilter = function(length, hashingFunctions) {
  this._length = length || 10000;
  this._hashingFunctions = hashingFunctions;
  this._data = new Array(this._length);
}

BloomFilter.prototype.insert = function(value) {
  var self = this;
  this._hashingFunctions.forEach(function(hashFunc) {
    var hash = hashFunc(self._length, value);
    self._data[hash] = 1;
  });
}

BloomFilter.prototype.contains = function(value) {
  for (var i = 0; i < this._hashingFunctions.length; ++i) {
    var hashFunc = this._hashingFunctions[i],
      hash = hashFunc(this._length, value);
    if ( !this._data[hash] ) { return false; }
  }
  return true;
}
