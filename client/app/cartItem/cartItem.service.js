'use strict';

angular.module('AngularJsTestson')
  .factory('cartItem', function () {

    var items = [];

    // Public API here
    return {
      add: function (item) {
        return items.push(item);
      },
      removeProductId: function(productId) {
        angular.forEach(items, function(v,k){
          if(this.keepGoing) {
            if (v.productId === parseInt(productId)){
              items.splice(k, 1);
              this.keepGoing = false;
            }
          }
        },{keepGoing:true});
				return items.length;
      },
      clear: function() {
        items.length = 0;
      },
      items: items
    };
  });
