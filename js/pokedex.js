var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.controller('monController',['$scope','$log','$http','pokeS',function ($scope,$log,$http,pokeS) {

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
    $scope.log = function () {
        $log.log($scope.choix);
    };

    $scope.log = function () {
        console.log(pokeS);
        pokeS.listAll().$promise.then(function (data) {
            console.log(data);
            console.log(data);
            $scope.content = data.results;
        });
    }

        /* $http.get("https://pokeapi.co/api/v1/pokedex/").then(function (response) {
             console.log(response.data.objects[0].pokemon)
             $scope.content=response.data;
         }) */
    }]);

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
    /*pokeApp.config(['$resourceProvider', function($resourceProvider) {
       $resourceProvider.defaults.stripTrailingSlashes = false;
      var Pokemon = $resource("http://pokeapi.co/api/v1/type/:id/",
           {userId:123, nameId:'@id'}, {
               charge: {method:'POST', params:{charge:true}}
           });
       var pokemons = Pokemon.query(function() {
           var pokemon = pokemons[0];
           expect(pokemon instanceof Pokemon).toEqual(true);
           pokemon.name = "J";

           pokemon.$save();

           pokemon.$charge({amount:9.99});

       });*/


