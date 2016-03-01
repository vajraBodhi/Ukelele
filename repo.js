define([], function() {
  var hash = {};
  var mo = {
    length: 0;
  };

  mo.register = function(id, component) {
    hash[id] = component;
    this.length++;
  };

  mo.byId = function(id) {
    return hash[id];
  };

  mo.unRegister = function(id) {
    delete hash[id];
    this.length--;
  }
});