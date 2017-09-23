angular.module('main').controller('productController', function($scope, $http){
    $scope.product = {};

    $scope.submeter = function(){
        $http.post('/produtos', $scope.product)
        .success(function(){
            console.log('Foto cadastrada corretamente.');
        }).error(function(erro){
            console.log(erro);
        });
    };



    $scope.submeter = function() {
        console.log($scope.product);
    };

});
