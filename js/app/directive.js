var myApp = angular.module('myApp');
myApp
//директива, добавляющая товар в корзину
          .directive('renderCart', ['$rootScope', function($rootScope){
              return {
                restrict: 'E',
                template: '<h2>Корзина:</h2>' +
                '<ul><li ng-repeat="cart_item in cart.list">{{cart_item.name}} - {{cart_item.count}} шт.</li></ul>',
                link: function($scope, elem, attrs){
                //отлов события
                  $rootScope.$on('cartChanged', function(event, cart){
                    $scope.cart = cart;
                  });
                }
              }
            }])