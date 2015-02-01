'use strict';

describe('HomeControllers', function() {
	describe('Controller: HomeController', function () {

	  // load the controller's module
	  // 初期化処理
	  beforeEach(module('AngularJsTestson'));

	  var HomeCtrl, scope, httpBackend;

	  // Initialize the controller and a mock scope
	  // inject 順番無視
	  //  
	  beforeEach(inject(function ($controller, $rootScope) {
	    scope = $rootScope.$new();
	    HomeCtrl = $controller('HomeController', {
	      $scope: scope
	    });
	  }));
	
	  it('3 cart Itemとの「cartItems」モデルを作成する必要があります', function () {
	    expect(scope.cartItems.length).toBe(3);
	  });
	  
	  var products = [{id: 10, name: 'redbull', price: 250},
	                  {id: 11, name: 'コーヒー', price: 100}];
	  httpBackend.expectGET('/api/products').respond(200, products);

	  it('cartItemを何かredbullとコーヒーをモデルの中に作成', function () {
		  expect(scope.products).toBeUndefined();
		  httpBackend.flush();
		  expect(scope.products).toEqual(products);
	  });
	  
	  it('ユニコードチェックマークまたはクロスにブール値に変換する必要があります',
        inject(function(checkmarkFilter) {
		expect(checkmarkFilter(true)).toBe('\u2713');
		expect(checkmarkFilter(false)).toBe('\u2718');
      }));
    
	  it('should create "phones" model with 3 phones', function() {
		expect(scope.cartItems.length).toBe('');
	  });
	  
	});
});
