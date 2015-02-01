'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeController', {
      $scope: scope
    });
    httpBackend = $httpBackend;
    httpBackend.expectGET('/api/products').respond(products);
  }));

  var products = [{id: 10, name: 'redbull', price: 250},
                  {id: 11, name: 'コーヒー', price: 100}];


  it('products取得', function () {
      expect(scope.products).toBeUndefined();
      httpBackend.flush();
      expect(scope.products).toEqual(products);

  });
});
