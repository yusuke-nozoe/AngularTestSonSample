'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $http, $state, cartItem) {
    $scope.isLoading = false;
    $scope.payment = function(){
      $scope.isLoading=true;
      var items=[];
      angular.forEach(cartItem.items, function(v){
        items.push({
          productId: v.productId,
          quantity: 1
        });
      });
      $http.post('/api/purchases', {
        firstName   : $scope.order.firstName,
        lastName    : $scope.order.lastName,
        tel         : $scope.order.tel,
        address     : $scope.order.address,
        mailaddress : $scope.order.mailaddress,
        purchases   : items
      }).success(function(data){
        window.alert(data.message);
        cartItem.clear();
        $state.go('main.app.home');
      });
    };
  })

  .directive('isTelephone', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attrs, ctrl) {

        var reg = /^[0-9]+$/;
        scope.order = {};

        ctrl.$parsers.unshift(function(value){
          ctrl.$setValidity('telephone', reg.test(value));
          return value;
        });
      }
    };
  });
