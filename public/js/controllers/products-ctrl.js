angular.module('main').controller('productController', function($scope){
    $scope.produtos = [
        {
            titulo: 'Primeiro titulo',
            descricao: '',
            quantidade: 5,
            valor: 3.50
        },

        {
            titulo: 'Segundo titulo',
            descricao: 'Uma descri',
            quantidade: 4,
            valor: 6.50
        },

        {
            titulo: 'terceiro titulo',
            descricao: ' gostaria de saber se posso usar o MEAN stack numa aplicação angular2 cli.',
            quantidade: 60,
            valor: 0.50
        },
    ];
});
