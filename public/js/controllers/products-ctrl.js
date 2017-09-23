angular.module('main')
.controller('productCtrl', function($scope, $http){

    $scope.produtos = [];
    $scope.mensagem = '';
    $scope.editando = {};

    $http.get('/produtos')
       .then(function(retorno) {
           $scope.produtos = retorno.data;
       })
       .catch(function(erro) {
           console.log(erro);
       });

//Isso aqui ta funcionando , só não sei pq o mongo não responde positivamente
       $scope.remover = function(produto){
           $http.delete('/produtos/' + produto._id)
           .then(function(produto){
               var indiceDoItem = $scope.produto.indexOf(produto)
               $scope.produto.splice(indiceDoItem, 1);
               console.log('produto ' + produto.titulo + " foi removido.");
               $scope.mensagem = 'produto ' + produto.titulo + " foi removido com sucesso."
           }).catch(function(erro){
               console.log(erro);
               console.log('Deu erro ao deletar o item ' + produto.titulo);
                $scope.mensagem = 'produto ' + produto.titulo + " não foi removido =/"
           });
       };





       $scope.editar = function(produto){
           $scope.editando = produto;
           console.log($scope.editando);
           /*
           $http.put('/produtos/' + produto._id)
           .then(function(produto){
               console.log('produto ' + produto.titulo + " foi removido.");
               $scope.mensagem = 'produto ' + produto.titulo + " foi removido com sucesso."
           }).catch(function(erro){
               console.log(erro);
               console.log('Deu erro ao deletar o item ' + produto.titulo);
                $scope.mensagem = 'produto ' + produto.titulo + " não foi removido =/"
           });*/
       };





});
