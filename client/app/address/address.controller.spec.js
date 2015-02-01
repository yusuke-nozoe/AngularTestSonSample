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
    $compile = $controller;
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
    //$rootScope.$digest();
    //var node = $compile("<input ng-model=\"order.tel\" type=\"tel\" is-telephone />")($rootScope);
    //$rootScope.$digest();
    //console.log('scope: ', scope)
    //expect(1).toEqual(1);
  });
});
