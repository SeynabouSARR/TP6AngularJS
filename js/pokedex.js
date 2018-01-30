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

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
