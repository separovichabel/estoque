angular.module('main').controller('productController', function($scope, $http){
    $scope.produtos = [];

    $http.get('/produtos')
       .then(function(retorno) {
           $scope.produtos = retorno.data;
       })
       .catch(function(erro) {
           console.log(erro);
       });
});
