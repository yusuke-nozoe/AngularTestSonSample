'use strict';

describe('Controller: AddressCtrl', function () {
  var $compile, $rootScope;

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var AddressCtrl, scope;

  //// Initialize the controller and a mock scope
  //beforeEach(inject(function ($controller, $rootScope) {
  //  scope = $rootScope.$new();
  //  AddressCtrl = $controller('AddressCtrl', {
  //    $scope: scope
  //  });
  //}));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    scope = _$rootScope_.$new();
    AddressCtrl = _$compile_('AddressCtrl', {
      $scope: scope
    });
  }));

  it('should has $scope.isLoading value to be false', function () {
    expect(scope.isLoading).toBe(false);
    //expect(1).toEqual(1);
  });

  //it('should has $scope.payment is correct', function () {
  //  scope.payment();
  //  expect(scope.isLoading).toBe(true);
  //});

  it('testing isTelephone directive', function () {
    // Compile a piece of HTML containing the directive
    var element = $compile("<input ng-model=\"order.tel\" type=\"tel\" is-telephone value=\"あああ\" />")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    console.log(element)
    console.log('$rootScope: ', scope.purch_form)
    //expect(1).toEqual(1);
  });
});
