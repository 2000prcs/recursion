// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className, element = document.body) {
  // your code here
  var targetClasses = [];

  var childNodes = element.childNodes;

  if (element.classList && element.classList.contains(className)) {
    targetClasses.push(element);
  }

  for (var i = 0; i < childNodes.length; i++) {
    var inner = getElementsByClassName(className, childNodes[i]);
    targetClasses = targetClasses.concat(inner);

  }
  return targetClasses;
};
