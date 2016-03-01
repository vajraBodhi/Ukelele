define(['./repo', './utils'], function(repo, utils) {
  function Component(/*parms*/) {
    // this._id = parms.id
    // this.attr
    this._declaredClass = "Component";
  };

  Component.prototype.mixinAttributes = function() {
    // this._started = false;
    this._created = false;
    this._destroyed = false;
    Object.defineProperty(this, 'declaredClass', {
      get: function() {
        return this._declaredClass;
      }
    });
  };
  Component.prototype.parseTemplate = function() {
    var node = document.createElement('div');
    node.className = this.baseClass || "";
    return node;
  };
  Component.prototype.postCreate = function() {

  };
  Component.prototype.startup = function() {
    // this._started = true;
  };

  Component.prototype.create = function() {
    this.mixinProperties();
    // remove unuseful code about attributes
    // if (this._attributes) {
    //   for (var p in this._attributes) {

    //   }
    // }
    this.cRoot = this.parseTemplate();
    var id = repo.getUniqueId(this.declaredClass);
    this.cRoot.setAttribute('componentId', id);
    this.postCreate();
    this._created = true;

    repo.register(id, this);
  };

  Component.prototype.destroy = function() {
    repo.unRegister(this.cRoot.getAttribute('componentId'));
    this.cRoot.innerHTML = "";
    this.cRoot.removeAttribute('componentId');
    this.cRoot.parentNode.removeChild(this.cRoot);
    this._destroyed = true;
  };

  return Component;
});