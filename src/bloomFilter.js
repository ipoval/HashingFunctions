var BloomFilter = function(length, hashingFunctions){
  this._length = length || 100;
  this._hashingFunctions = hashingFunctions;
  this._data = new Array(this._length);
}

BloomFilter.prototype.insert = function(value){
  var self = this,
    hashedValues = [];

  this._hashingFunctions.forEach(function(hashFunc) {
    hashedValues.push(hashFunc(10000, value));
  });

  hashedValues.forEach(function(hashedValue) {
    self._data[hashedValue] = 1;
  });
}

BloomFilter.prototype.contains = function(value){
  var self = this,
    hashedValues = [];

  this._hashingFunctions.forEach(function(hashFunc) {
    hashedValues.push(hashFunc(10000, value));
  });

  var doesContain = true;

  hashedValues.forEach(function(hashedValue) {
    if ( self._data[hashedValue] != 1 ) {
      doesContain = false;
    }
  });

  return doesContain;
}
