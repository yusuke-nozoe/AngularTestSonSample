/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

// 入力ページ
var addressPage = function() {

  // エレメント
  this.purchaseBtnEl = element(by.css('.item-purchase'));


  /**
   * ユースケース(フォームの入力)
   * フォームに文字を入力する
   *
   * @param  {String}  inputElName - 入力するinput element のname 属性
   * @param  {String}  inputText   - 入力するinput element の内容
   * @return {Promise}
   */
  this.inputForm = function(inputElName, inputText){
    var inputElement = element(by.name(inputElName));
    return browser.wait(function(){
      return inputElement.isPresent();
    }, 10000, 'about input form').then(function(){
      return inputElement.sendKeys(inputText);
    });
  };

  /**
   * ユースケース(購入する)
   * 購入ボタンを押し、alertにOKを押す
   *
   * @return {Promise}
   */
  this.purchase = function(){
    var purchaseBtn = new addressPage().purchaseBtnEl;


    return browser.wait(function(){
      return purchaseBtn.isPresent();
    }).then(function(){
      return purchaseBtn.click();
    }).then(function(){
      return browser.wait(function(){
        return browser.switchTo().alert().then(
          function() { return true; }, 
          function() { return false; }
          );
      }).then(function(){
        return browser.switchTo().alert().accept();
      })
    });
  };
};

module.exports = new addressPage();
