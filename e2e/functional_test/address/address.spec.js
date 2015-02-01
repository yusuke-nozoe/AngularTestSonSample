'use strict';
describe('address', function() {
  var page={};

  beforeEach(function(done) {
    browser.get('/orderlist/index.HTML');
    page.cart = require('../../components/cart/cart.po');
    page.home = require('../../components/home/home.po');
    page.address = require('../../components/address/address.po');
    // 商品を2つ追加しておく
    page.home.addCart('0').then(function(){
      return page.home.addCart('1');
    }).then(function(){
      return page.home.buyBtnEl.click();
    }).then(function(){
      done();
    });
  });

  it('フォームに情報を入力して購入', function(done) {
    page.address.inputForm('lastName', "Jordan").then(function(){
      return page.address.inputForm('firstName', "Michael");
    }).then(function(){
      return page.address.inputForm('tel', '0312345678');
    }).then(function(){
      return page.address.inputForm('address', '東京都のどこか');
    }).then(function(){
      return page.address.inputForm('mail', 'example@co.jp');
    }).then(function(){
      return page.address.purchase();
    }).then(function(){
      expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る');
      done();
    });
  });
});
