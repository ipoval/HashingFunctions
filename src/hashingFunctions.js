var hashingFunction1 = function(range, value) {
  var sumOfCharCodes = value.split('').reduce(function(prevVal, curVal) {
    return prevVal + curVal.charCodeAt();
  }, 0);

  return (sumOfCharCodes + value.length) % range;
}

// NOTE: can add random salt to the value and apply the first hashFunc
var hashingFunction2 = function(range, value) {
  var productOfCharCodes = 1;
  for ( var i = 0; i < value.length; ++i ) {
    productOfCharCodes = productOfCharCodes * value.charCodeAt(i);
  }
  return (productOfCharCodes + value.length) % range;
}

var hashingFunction3 = function(range, value) {
  var productOfCharCodes = 1;
  for ( var i = 0; i < value.length; ++i ) {
    productOfCharCodes = productOfCharCodes * value.charCodeAt(i);
  }
  return (Math.floor(productOfCharCodes / value.length) + value.length) % range;
}

var hashingFunction4 = function(range, value) {
  var total = 0;
  for ( var i = 0; i < value.length; ++i ) {
    total ^= value[i].charCodeAt();
  }
  return total % range;
}

var hashingFunctions = [hashingFunction1, hashingFunction2, hashingFunction3];
