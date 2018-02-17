// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var result = "";
  // if obj is string  
  if (typeof obj === 'string') {
    return result += '"' + obj + '"';
    // if obj is either number, boolean or null
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return result += obj;
    // if obj is function or undefined
  } else if (typeof obj === 'function' || obj === undefined) {
    return result += '';
    // if obj is array
  } else if (Array.isArray(obj)) {
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i === obj.length - 1) { break; }
      result += ',';
    }
    result += ']';
    return result;
  }
  // if obj is object
  result += '{';
  for (var key in obj) {
    if (typeof obj[key] === 'function' || obj[key] === undefined) { break; }
    result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    if (key === Object.keys(obj).pop()) { break; }
    result += ',';
  }
  result += '}';
  return result;
};
