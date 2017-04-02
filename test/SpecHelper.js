var assert = {

  testMessage: function(text, color) {
    li = document.createElement("li");
    li.innerHTML = text;
    li.style.color = color;
    document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      text = "ASSERTION FAILED: " + actual + "**IS NOT EQUAL TO**" + expected;
      color = "red";
    }
    else {
      text = "TEST PASSED! " + actual + "**is equal to**" + expected;
      color = "green";
    }
    this.testMessage(text, color);
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      text = "ASSERTION FAILED: " + assertionToCheck + "**is not truthy.**";
      color = "red"
    }
    else {
      text = "TEST PASSED! " + assertionToCheck + "**is truthy**";
      color = "green";
    }
    this.testMessage(text, color);
  },

  isInstanceOf: function(object, Constructor){
    if(object.constructor !== Constructor){
      text = "COMPARISON FAILED: " + object + "** is not an instance of.** " + Constructor;
      color = "red";
    }
    else {
      text = "TEST PASSED! Your " + object + " **is an instance of** " + Constructor.name;
      color = "green";
    }
    this.testMessage(text, color);
  },

  createMock: function(name, method, returns){
    var obj = {};
    obj[name] = name;
    obj[method] = function(){return returns;};
    return obj;
  }

};
