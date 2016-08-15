var app = angular.module("ngFun", []);

app.controller('PokemonController', PokemonController);
PokemonController.$inject = ['$scope'];
function PokemonController($scope) {
	$scope.pokemon = [
	{
		Ndex: 25,
		name: 'Pikachu',
		type: 'Electric'
	},
	{
		Ndex: 10,
		name: 'Caterpie',
		type: 'Bug'
	},
	{
		Ndex: 39,
		name: 'Jigglypuff',
		type: 'Fairy'
	},
	{
		Ndex: 94,
		name: 'Gengar',
		type: 'Ghost'
	},
	{
		Ndex: 143,
		name: 'Snorlax',
		type: 'Normal'
	}
	];

	$scope.catchphrase = "don't gotta catch none of em!";
};

app.filter('reverse', function() {
  return function(input) {
    input = input || '';
    var out = input.split("").reverse().join("");
    // uppercase only first letter
    out = out.toLowerCase();
    out = out[0].toUpperCase() + out.slice(1);
    return out;
  };
});