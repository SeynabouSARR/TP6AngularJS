var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');
pokeApp.controller('controller',function ($scope) {
    $scope.list=[
        "Scald",
        "Round",
        "Soak",
        "Synchronoise",
        "Telekinesis",
        "Psyshock",
        "Wonder-room"
    ]
});

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
    
});

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
