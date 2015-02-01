'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var CartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem) {
    scope = $rootScope.$new();
    cartItem.items = [{productId: 10, productName: 'コーヒー', price: 100},
                      {productId: 20, productName: '紅茶', price: 200},
                      {productId: 20, productName: '紅茶', price: 200}];
    CartCtrl = $controller('CartCtrl', {
      $scope: scope,
      cartItem: cartItem
    });
  }));

  it('カートの初期化', function () {
      expect(scope.cartItems).toEqual({10: {productName: 'コーヒー', price: 100,
                                            count: 1,
                                            cartObject: {productId: 10,
                                                         productName: 'コーヒー',
                                                         price: 100}},
                                       20: {productName: '紅茶',
                                            price: 200,
                                            count: 2,
                                            cartObject: {productId: 20,
                                                         productName: '紅茶',
                                                         price: 200}}});
  });

  it('カードに追加', function() {
      scope.addCart('20');
      expect(scope.cartItems['20'].count).toBe(3);
  });
});
