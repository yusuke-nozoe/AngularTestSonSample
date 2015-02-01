'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var CartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem) {
    scope = $rootScope.$new();
    cartItem.add({productId: 10, productName: 'コーヒー', price: 100});
    cartItem.add({productId: 20, productName: '紅茶', price: 200});
    cartItem.add({productId: 20, productName: '紅茶', price: 200});
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

  it('カートに追加', function() {
      scope.addCart('20');
      expect(scope.cartItems['20'].count).toBe(3);
  });

  it('カートから削除', function() {
      scope.removeCart('20');
      expect(scope.cartItems['20'].count).toBe(1);
      scope.removeCart('20');
      expect(scope.cartItems['20']).not.toBeDefined();
  });

  it('カートをクリア', function() {
      scope.clearCart();
      expect(scope.cartItems['10']).not.toBeDefined();
      expect(scope.cartItems['20']).not.toBeDefined();
  });
});
