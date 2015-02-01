'use strict';

describe('Controller: AddressCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var AddressCtrl, scope;
  var $compile, $rootScope;

  //// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_) {
    scope = _$rootScope_.$new();
    AddressCtrl = $controller('AddressCtrl', {
      $scope: scope
    });
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should has $scope.isLoading value to be false', function () {
    expect(scope.isLoading).toBe(false);
  });

  //it('should has $scope.payment is correct', function () {
  //  scope.payment();
  //  expect(scope.isLoading).toBe(true);
  //});

  it('testing isTelephone directive', function () {
    var element = $compile('<form class="simple-form" name="purch_form">' +
         '<input ng-model="order.lastName" type="text" name="lastName" required>' +
         '<input ng-model="order.firstName" type="text" name="firstName" required>' +
         '<input ng-model="order.tel" type="tel" required is-telephone id="tel" name="tel">' + 
         '<input ng-model="order.address" type="text" required id="address" name="address">' + 
         '<input ng-model="order.mailaddress" type="email" required id="mail" name="mail">' +
       '</form>'
      )($rootScope);
    scope.order.tel = "aaa";
    console.log('scope.order: ', scope.order)
    console.log('scope.$valid: ', scope.$valid)
    scope.$digest();
    console.log(element);
    expect(1).toEqual(1);
  });
});
