var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.controller("myAfficheurCtrl",function ($scope,$rootScope) {

    $scope.pokemonDetails = [];
 
     $rootScope.setPokemonSelected = function (value) {
         $scope.pokemonDetails=value;
     }.bind(this);
 
 
 });

pokeApp.controller('monController',function ($scope, $rootScope, $log , $http, pokeS) {

    $scope.pokemons = [
        {name: "Scald", id: '54'},
        {name: "Round", id: '55'},
        {name: "Soak", id: '56'},
        {name: "Synchronoise", id: '57'},
        {name: "Telekinesis", id: '58'},
        {name: "Psyshock", id: '59'},
        {name: "Wonder rom", id: '60'}
    ];

    $scope.$watch('id', function () {
        var trouve = false;
        $scope.pokemons.forEach(function (pokemon) {
            if (pokemon.id == $scope.id)
            {
                $scope.choix = pokemon.name;
                trouve = true;
            }


        })

    });

    $scope.$watch('choix', function () {
        var link = $scope.choix+"";
        var link_tab = link.split('/');
        var id = link_tab[link_tab.length - 2];

        pokeS.get({id:id}).$promise.then(function (value) {
           $rootScope.setPokemonSelected(value);
        });
    });


    $scope.log = function () {
        $log.log($scope.choix);
    };

    $scope.loadPokemons = function () {
        console.log(pokeS.listAll().$promise);
        pokeS.listAll().$promise.then(function (data) {
            console.log(data);
            console.log(data);
            $scope.pokemons = data.results;
        });
    }

        
    });



    

pokeApp.factory('pokeS',function($resource){
    return $resource('https://pokeapi.co/api/v2/pokemon/:id', {id:"@id"},
        {
            listAll: { url: 'https://pokeapi.co/api/v2/pokemon/',
                method: 'GET', params: {}}
            /* 'get':    {method:'GET'},
             'save':   {method:'POST'},
             'query':  {method:'GET', isArray:true},
             'remove': {method:'DELETE'},
             'delete': {method:'DELETE'}*/
        }
        );

});
    


