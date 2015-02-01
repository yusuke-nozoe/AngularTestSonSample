'use strict';

describe('Service: cartItem', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var cartItem;
  beforeEach(inject(function (_cartItem_) {
    cartItem = _cartItem_;
  }));

  it('should do something', function () {
    expect(!!cartItem).toBe(true);
  });

  it('商品追加', function() {
      expect(cartItem.add({productId: 10, name: 'はじめてのAngularJS', price: 2000})).toBe(1);
      expect(cartItem.add({productId: 13, name: '味わいカルピス', price: 100})).toBe(2);
  });
});
