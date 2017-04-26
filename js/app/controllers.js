var myApp = angular.module('myApp');
myApp          
          .controller('MyController', ['$scope', 'myCart', function($scope, myCart){
              $scope.items = [];
              //нумерация товаров и присвоение им цены
              for(var i = 1; i < 11; i++){
                $scope.items.push({id: i, name: "Товар №" + i, cost: 100 * i})
              }
              //добавляем товар в корзину
              $scope.addToCart = function(item){
                myCart.addItem(item);
              }
          }])
          
          
          
