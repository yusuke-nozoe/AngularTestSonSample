'use strict';

angular.module('AngularJsTestson')
  .controller('CartCtrl', function ($scope, cartItem) {

    var cartItems = cartItem.items;
    

    var refresh = function(){
      var items = {};
      for (var i=0; i<cartItems.length; i++) {
          if (items[cartItem.items[i]]) {
              items[cartItem.items[i]].count++;
          } else {
              items[cartItem.items[i]] = {
                  productName: cartItem.items[i].productName,
                  price: cartItem.items[i].price,
                  count: 1,
                  cartObject: items[i]
              };
          }
      }
      $scope.cartItems = cartItems;
    };
    refresh();

    $scope.addCart = function(index) {
      cartItem.add($scope.cartItems[index].cartObject);
      refresh();
    };

    $scope.removeCart = function(index) {
      cartItem.removeProductId(index);
      refresh();
    };

    $scope.clearCart = function() {
      cartItem.clear();
      refresh();
    };

  });
