var hashingFunction1 = function(range, value) {
  var sumOfCharCodes = 0;
  for ( var i = 0; i < value.length; ++i ) {
    sumOfCharCodes += value.charCodeAt(i);
  }
  return (sumOfCharCodes + value.length) % range;
}

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

var hashingFunctions = [hashingFunction1, hashingFunction2, hashingFunction3];
