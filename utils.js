define([], function() {
  var mo = {};

  mo.isEmpty = function(obj) {
    for (var p in obj) {
      return false;
    }

    return true;
  };
});