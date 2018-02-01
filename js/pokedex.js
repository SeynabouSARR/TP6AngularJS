var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.controller('monController',function ($scope) {

    $scope.pokemons = [
        {name:"Scald",id:54},
        {name:"Round",id:55},
        {name:"Soak",id:56},
        {name:"Synchronoise",id:57},
        {name:"Telekinesis",id:58},
        {name:"Psyshock",id:59},
        {name:"Wonder rom",id:60}
    ];

    $scope.$watch('id',function(){
        var trouve = false;
        $scope.pokemons.forEach(function (pokemon) {
            if(pokemon.id == $scope.id)
            {
                $scope.choix = pokemon.name ;
                trouve = true;
            }


        })

        });
    $scope.foo=function () {
        console.log("ok");
    }
    
});

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
