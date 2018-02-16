var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.directive("pokedex",function () {
    return {
        templateUrl : "vuePokemon.html"
    };
})



// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.service("myService" ,function($resource, pokeS,$rootScope){

    var pokemons = [];
    var pokemon;

    this.getPokemons = function () {
        return this.pokemons;
    }.bind(this);
    
    this.getPokemon = function () {
        return pokemon;
    }.bind(this);

    this.setPokemons = function(value) {
        this.pokemons = value;

    }.bind(this);

    this.setPokemonSelected = function(value) {
        console.log('ok');
        this.pokemons = value;
        $rootScope.setPokemonSelected(value);
        console.log(value);

    }.bind(this);


});






pokeApp.controller('monController', function($scope, $rootScope, $log , $http, pokeS, myService) {

    $scope.pokemons=[];
    pokeS.listAll().$promise.then(function (value) {
        myService.setPokemons(value.results);
    });


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


    $scope.log = function () {
        //$log.log($scope.choix);
    };

    $scope.$watch('choix', function () {
        var link = $scope.choix+"";
        var link_tab = link.split('/');
        var id = link_tab[link_tab.length - 2];

        pokeS.get({id:id}).$promise.then(function (value) {
           myService.setPokemonSelected(value);

        });

       
    });

    $scope.loadPokemons =function () {
        $scope.pokemons=myService.getPokemons();
    }

});


pokeApp.controller("myAfficheurCtrl",function ($scope,$rootScope) {

    $scope.pokemonDetails = [];

     $rootScope.setPokemonSelected = function (value) {
         $scope.pokemonDetails=value;
     }.bind(this);
 });


pokeApp.factory('pokeS',function ($resource) {
    return $resource('https://pokeapi.co/api/v2/pokemon/:id', {id: "@id"},
        {
                listAll: { url: 'https://pokeapi.co/api/v2/pokemon/',
                method: 'GET', params: {}}
        }
    );
});
