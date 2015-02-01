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
      var products = [{productId: 10, name: 'はじめてのAngularJS', price: 2000},
                      {productId: 13, name: '味わいカルピス', price: 100}];
      expect(cartItem.add(products[0])).toBe(1);
      expect(cartItem.add(products[1])).toBe(2);
      expect(cartItem.items).toEqual(products);
  });

  it('商品１個追加１個削除', function() {
      expect(cartItem.add({productId: 10, name: 'はじめてのAngularJS', price: 2000}));
      expect(cartItem.removeProductId(10));
      expect(cartItem.items.length).toBe(0);
  });

  it('商品２個追加１個削除', function() {
      expect(cartItem.add({productId: 10, name: 'はじめてのAngularJS', price: 2000}));
      expect(cartItem.add({productId: 13, name: '味わいカルピス', price: 100}));
      expect(cartItem.removeProductId(10));
      expect(cartItem.items.length).toBe(1);
  });

  it('商品クリア', function() {
      expect(cartItem.add({productId: 10, name: 'はじめてのAngularJS', price: 2000})).toBe(1);
      expect(cartItem.add({productId: 10, name: 'はじめてのAngularJS', price: 2000})).toBe(2);
      expect(cartItem.add({productId: 11, name: '味わいカルピス', price: 100})).toBe(3);
      expect(cartItem.items.length).toBe(3);
      cartItem.clear();
      expect(cartItem.items.length).toBe(0);
  });
});
